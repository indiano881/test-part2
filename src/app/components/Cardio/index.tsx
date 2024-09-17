import Hearth from "../../../../public/healthcare.png";

type CardioProps = {
    updateFunction: (value: string) => void;
    setWorkoutType: (type: string) => void;
};

const Cardio = ({ updateFunction, setWorkoutType }: CardioProps) => {
    const handleClick = () => {
        updateFunction("back");
        setWorkoutType("cardio");
    };

    return (
        <div data-testid="cardio-card" className="bg-red-800 m-4 p-4 border-2 flex flex-col items-center">
            <h2 data-testid="Cardio" className="font-semibold text-2xl">Cardio</h2>
           
            <img src={Hearth.src} alt="Cardio icon" className="w-20" />
            <button 
              data-testid="getWorkout-Cardio" 
              onClick={handleClick} 
              className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">
                Get workout
            </button>
        </div>
    );
};

export default Cardio;
