import MobilityImage from "../../../../public/stretching-exercises.png";

type StretchingProps = {
    updateFunction: (value: string) => void;
    setWorkoutType: (type: string) => void;
};

const Stretching = ({ updateFunction, setWorkoutType }: StretchingProps) => {
    const handleClick = () => {
        updateFunction("back");
        setWorkoutType("stretching");
    };

    return (
        <div data-testid="stretching-card" className="bg-yellow-400 m-4 p-4 border-2 flex flex-col items-center w-[205px]">
            <h2 className="font-semibold text-2xl">Mobility</h2>
          
            <img src={MobilityImage.src} alt="Mobility icon" className="w-20" /> 
            <button
              data-testid="getWorkout-stretching"
              onClick={handleClick}
              className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white"
            >
              Get workout
            </button>
        </div>
    );
};

export default Stretching;
