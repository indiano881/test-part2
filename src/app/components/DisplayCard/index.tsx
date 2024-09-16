

interface DisplayCardProps {
    workout: { [key: string]: string }; 
    type: string;
    onClick: () => void;
  }
  
  const DisplayCard: React.FC<DisplayCardProps> = ({ workout, type, onClick }) => {
    
    const [exerciseName, exerciseDetails] = Object.entries(workout)[0];
  
    return (
      <div className="card">
        <h2>{type.toUpperCase()} Workout</h2>
        <p>
          <strong>{exerciseName}:</strong> {exerciseDetails}
        </p>
        <button onClick={onClick}>Go Back</button>
      </div>
    );
  };
  
  export default DisplayCard;
  