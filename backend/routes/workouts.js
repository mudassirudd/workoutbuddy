const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutsController");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

//GET all Workouts
router.get("/", getWorkouts);
// GET a sinlge workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);
// DELETE a workout
router.delete("/:id", deleteWorkout);
// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
