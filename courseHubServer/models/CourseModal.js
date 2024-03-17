import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter course title"],
    minLength: [4, "Title atlist 4 characters"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter course description"],
    minLength: [10, " atlist 10 characters"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numberOfVideos: {
    type: Number,
    default: 0,
  },
  category: {
    type:String,
    required: true,
  },
  createdBy:{
    type:String,
    required:[true,"enter Creators name"]
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
});

export const Course = mongoose.model("Course", courseSchema);
