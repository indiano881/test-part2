type StretchingProps = {
    updateFunction: any
}

const Stretching = ({updateFunction}:StretchingProps) => {
    return (
        <div data-testid="stretching-card">
          <h2>Mobility</h2>
          <button data-testid="getWorkout-stretching">Get workout</button>
        </div>
    )
};

export default Stretching
