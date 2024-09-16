
type CardioProps = {
    updateFunction:any,
    setWorkoutType: any
}

const Cardio = ({updateFunction, setWorkoutType}:CardioProps) => {
    const handleClick = ()=> {
        updateFunction("back")
        setWorkoutType("cardio")
    }
    return (
        <div data-testid="cardio-card">
          <h2 data-testid="Cardio">Cardio</h2>
          <button data-testid="getWorkout-Cardio" onClick={handleClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">Get workout</button>
        </div>
    )
};

export default Cardio
