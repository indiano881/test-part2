
type CardioProps = {
    updateFunction:any
}

const Cardio = ({updateFunction}:CardioProps) => {
    const handleClick = ()=> {
        updateFunction("Cardio")
    }
    return (
        <div data-testid="cardio-card">
          <h2 data-testid="Cardio">Cardio</h2>
          <button data-testid="getWorkout-Cardio">BUTTON</button>
        </div>
    )
};

export default Cardio
