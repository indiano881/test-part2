type StretchingProps = {
    updateFunction: any,
    setWorkoutType: any
}

const Stretching = ({updateFunction,setWorkoutType}:StretchingProps) => {
    const handleClick = ()=> {
        updateFunction("back")
        setWorkoutType("challenge")
    }
    return (
        <div data-testid="stretching-card">
          <h2>Mobility</h2>
          <button data-testid="getWorkout-stretching" onClick={handleClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">Get workout</button>
        </div>
    )
};

export default Stretching
