require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// import cors from 'cors'
const cors = require('cors')
app.use(
  cors({
    origin: 'https://workoutbuddy-ten.vercel.app',
    credentials: true,
  })
)

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
// const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and listening on Port ', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
