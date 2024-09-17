import GymImg from "../../../../public/weightlifting.png";

type GymProps = {
    updateFunction: (value: string) => void;
    setWorkoutType: (type: string) => void;
};

const Gym = ({updateFunction, setWorkoutType}:GymProps) => {
    const handleClick = ()=> {
        updateFunction("back")
        setWorkoutType("gym")
    }

    return (
        <div data-testid="gym-card" className="bg-blue-600 m-4 p-4 border-2 flex flex-col items-center">
            <h2 className="font-semibold text-2xl">Gain muscle</h2>
            <img src={GymImg.src} alt="Gym icon" className="w-20" />
            <button data-testid="getWorkout-gym" onClick={handleClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">Get workout</button>
        </div>
    )
};

export default Gym
