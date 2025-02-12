require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
// const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    //listen for request
    app.listen(process.env.PORT, (req, res) => {
      console.log("Connected to DB and listening on Port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;

