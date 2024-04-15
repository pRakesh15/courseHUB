import mongoose from "mongoose";

const stateSchema=mongoose.Schema({
  users:{
    type:Number,
    default:0,
  },
  subscriptions:{
    type:Number,
    default:0,
  },
  views:{
    type:Number,
    default:0,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

export const States=mongoose.model("States",stateSchema);