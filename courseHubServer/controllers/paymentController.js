import express from "express";
import { catchError } from "../middlewares/chatchError.js";
import { User } from "../models/UserModal.js";
import ErrorHendler from "../utils/errorHendler.js";
import { instant } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/Payment.js";

//functon for  create the subscription..
export const buySubscription = catchError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role === "admin")
    return next(
      new ErrorHendler("No need to  buy subscriptions for ADMIN", 400)
    );
  const planid = process.env.PLAIN_ID || "plan_NtrahbL0FtPRZY";
  const isSubscribed = user.subscription.status === "created" ? true : false;
  if (isSubscribed)
    return next(new ErrorHendler("You are already subscribed !!", 401));
  const subscription = await instant.subscriptions.create({
    plan_id: planid,
    customer_notify: 1,
    total_count: 12,
  });
  await User.findByIdAndUpdate(user._id, {
    subscription: {
      id: subscription.id,
      status: subscription.status,
    },
  });
  res.status(201).json({
    success: true,
    message: subscription.id,
  });
});

//function for make payment..
export const paymentVerification = catchError(async (req, res, next) => {
  const { razorpay_signature, razorpay_payment_id, razorpay_subscription_id } =
    req.body;
  const user = await User.findById(req.user._id);

  const subscription_id = user.subscription.id;
  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZEREPAY_API_SECRET)
    .update(razorpay_payment_id + "|" + subscription_id, "utf-8")
    .digest("hex");
  const isPade = generated_signature === razorpay_signature;

  if (!isPade) return res.redirect(`${process.env.FRONTEND_URL}/paymentfail`);

  await Payment.create({
    razorpay_signature,
    razorpay_payment_id,
    razorpay_subscription_id,
  });

  await User.findOneAndUpdate(user.id, {
    subscription: {
      status: "Active",
    },
  });
  res.redirect(
    `${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`
  );
});

//function for get the payment id...
export const getRazorPayKey = catchError(async (req, res, err) => {
  res.status(200).json({
    success: true,
    key: process.env.RAZEREPAY_API_KEY,
  });
});

//function for refund getwy...

export const deleteSubscribtion = catchError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const subscriptionid = user.subscription.id;
 
  let refund = false;
  await instant.subscriptions.cancel(subscriptionid);

  // const isPayment = await Payment.findOne({
  //   razorpay_subscription_id: subscriptionid,
  // });
  // console.log(isPayment)
 
  // const gapOf = Date.now() - isPayment.createdAt;

  // const refundTime = 7 * 24 * 60 * 60 * 1000;

  // if (refundTime > gapOf) {
  //   await instant.payments.refund(isPayment.razorpay_payment_id);
  //   refund = true;
  // }

  // await isPayment.remove();

  await User.findOneAndUpdate(user._id,{
    subscription:{
      id:undefined,
      status:undefined
    }
  });

  res.status(200).json({
    success: true,
    message: refund
      ? "Refund Approved , the payment will recived withen 7 working Days !!"
      : "No refound initiated because  Time Limit Exceeded",
  });
});
