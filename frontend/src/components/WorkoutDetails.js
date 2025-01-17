const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        {" "}
        <strong> Reps :</strong> {workout.reps}
      </p>
      <p>
        <strong> Load(kg) :</strong> {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      {/* <p>{workout.updatedAt}</p> */}
    </div>
  );
};

export default WorkoutDetails;
