import { catchError } from "../middlewares/chatchError.js";
import { States } from "../models/Stats.js";

export const getDashBoardState = catchError(async (req, res, next) => {
  const states = await States.find({}).sort({ createdAt: "desc" }).limit(12);

  const stateData = [];
  for (let i = 0; i < states.length; i++) {
    stateData.unshift(states[i]);
  }
  const requreSize = 12 - states.length;
  for (let i = 0; i < requreSize; i++) {
    stateData.unshift({
      users: 0,
      subscriptions: 0,
      views: 0,
    });
  }

  const userCount = stateData[11].users;
  const subscriberCount = stateData[11].subscriptions;
  const viewsCount = stateData[11].views;

  let usersPercentage = 0,
    viewsPercentage = 0,
    subscribePercentage = 0;

  let userProfit = true,
    viewsProfit = true,
    subscriberProfit = true;

  if (stateData[10].users === 0) usersPercentage = userCount * 100;
  if (stateData[10].views === 0) viewsPercentage = viewsCount * 100;
  if (stateData[10].subscriptions === 0)
    subscribePercentage = subscriberCount * 100;
  else {
    const difference = {
      users: stateData[11].users - stateData[10].users,
      views: stateData[11].views - stateData[10].views,
      subscriptions: stateData[11].subscriptions - stateData[10].subscriptions,
    };
    usersPercentage = (difference.users / stateData[10].users) * 100;
    viewsPercentage = (difference.views / stateData[10].views) * 100;
    subscribePercentage =
      (difference.subscriptions / stateData[10].subscriptions) * 100;

    if (usersPercentage < 0) userProfit = false;
    if (viewsPercentage < 0) viewsPercentage = false;
    if (subscribePercentage < 0) subscribePercentage = false;
  }

  res.status(200).json({
    success: true,
    stats: stateData,
    userCount,
    subscriberCount,
    viewsCount,
    subscribePercentage,
    viewsPercentage,
    usersPercentage,
    subscriberProfit,
    userProfit,
    viewsProfit,
  });
});
