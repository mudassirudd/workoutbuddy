# WorkoutBuddy

WorkoutBuddy is a simple and user-friendly web application designed to help you track and manage your workouts efficiently. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this app allows users to add, view, and delete workouts with details like reps, loads, and timestamps. Postman was utilized during the development process for API testing.

## Features

- **Add a Workout**: Record a workout with details such as the number of reps, load, and the time it was added.
- **Delete a Workout**: Remove an existing workout from your list.
- **Track Details**: Keep track of your workout information with timestamps for better organization.

## Tech Stack

- **MongoDB**: Used as the database to store workout data.
- **Express.js**: Serves as the backend framework to handle API requests and responses.
- **React.js**: Provides the frontend for a seamless and interactive user experience.
- **Node.js**: Acts as the runtime environment for executing server-side JavaScript code.
- **Postman**: Used during development for testing and debugging API endpoints.

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)
- npm (comes with Node.js)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/workoutbuddy.git
   cd workoutbuddy
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `backend` directory and include the following:
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Run the Application**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm start
     ```

6. **Open the Application**
   Open your browser and navigate to `http://localhost:3000` to use WorkoutBuddy.

## API Endpoints

### Base URL: `/api/workouts`

1. **GET /workouts**
   - Fetch all workouts.
   - Example Response:
     ```json
     [
       {
         "_id": "60c72b2f9b1d4c001f8e4e3a",
         "title": "Push-ups",
         "reps": 20,
         "load": 0,
         "createdAt": "2023-01-15T10:30:00Z"
       }
     ]
     ```

2. **POST /workouts**
   - Add a new workout.
   - Request Body:
     ```json
     {
       "title": "Squats",
       "reps": 15,
       "load": 50
     }
     ```
   - Example Response:
     ```json
     {
       "_id": "60c72b2f9b1d4c001f8e4e3b",
       "title": "Squats",
       "reps": 15,
       "load": 50,
       "createdAt": "2023-01-15T11:00:00Z"
     }
     ```

3. **DELETE /workouts/:id**
   - Delete a workout by ID.
   - Example Response:
     ```json
     {
       "message": "Workout deleted successfully."
     }
     ```

## Future Enhancements

- Add user authentication and authorization.
- Include analytics to visualize workout progress.
- Add categories and tags for workouts.
- Enable editing of existing workouts.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find a bug or have a feature request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, feel free to reach out:
- **Email**: mudassirudd@gmail.com
- **GitHub**: mudassirudd(https://github.com/mudassirudd)

