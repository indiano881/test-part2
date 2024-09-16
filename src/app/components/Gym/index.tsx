type GymProps = {
    updateFunction:any 
    setWorkoutType: any
    //must fix later
}

const Gym = ({updateFunction, setWorkoutType}:GymProps) => {
    const handleClick = ()=> {
        updateFunction("back")
        setWorkoutType("gym")
    }

    return (
        <div data-testid="gym-card">
            <h2>Gain muscle</h2>
            <button data-testid="getWorkout-gym" onClick={handleClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">Get workout</button>
        </div>
    )
};

export default Gym
