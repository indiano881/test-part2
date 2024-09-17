

interface DisplayCardProps {
    workout: { [key: string]: string }; 
    type: string;
    onClick: () => void;
  }
  
  const DisplayCard: React.FC<DisplayCardProps> = ({ workout, type, onClick }) => {
    
    const [exerciseName, exerciseDetails] = Object.entries(workout)[0];
  
    return (
      <div className="bg-pink-500 m-4 p-4 border-2 flex flex-col items-center w-[300px]">
        <h2 className="text-2xl">{type.toUpperCase()} Workout</h2>
        <p className="text-xl">
          <strong>{exerciseName}:</strong> {exerciseDetails}
        </p>
        <button onClick={onClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#8457ed] w-[100px] font-bold hover:bg-lime-200 hover:text-black">Go Back</button>
      </div>
    );
  };
  
  export default DisplayCard;
  