const mongoose = require("mongoose");

// make schema
const Schema = mongoose.Schema;
// define schema
const workoutSchema = new Schema(
  {
    title: { type: String, require: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
  },
  { timestamps: true }
);
// create model
module.exports = mongoose.model("Workout", workoutSchema);
