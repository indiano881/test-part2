import ChallengeImage from "../../../../public/exercise.png";

type DailyChallengeProps = {
    updateFunction: (value: string) => void;
    setWorkoutType: (type: string) => void;
};

const DailyChallenge = ({ updateFunction, setWorkoutType }: DailyChallengeProps) => {
    const handleClick = () => {
        updateFunction("back");
        setWorkoutType("challenge");
    };

    return (
        <div data-testid="challenge-card" className="bg-green-600 m-4 p-4 border-2 flex flex-col items-center w-[205px]">
            <h2 className="font-semibold text-2xl">Daily Challenge</h2>
            
            <img src={ChallengeImage.src} alt="Challenge icon" className="w-20" /> 
            <button 
              data-testid="getWorkout-Challenge" 
              onClick={handleClick} 
              className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">
                Get workout
            </button>
        </div>
    );
};

export default DailyChallenge;
