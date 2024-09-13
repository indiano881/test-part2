type StretchingProps = {
    updateFunction: any
}

const Stretching = ({updateFunction}:StretchingProps) => {
    const handleClick = ()=> {
        updateFunction("Stretching")
    }
    return (
        <div data-testid="stretching-card">
          <h2>Mobility</h2>
          <button data-testid="getWorkout-stretching" onClick={handleClick}>Get workout</button>
        </div>
    )
};

export default Stretching
