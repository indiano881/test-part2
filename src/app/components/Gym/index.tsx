type GymProps = {
    updateFunction:any 
    //must fix later
}

const Gym = ({updateFunction}:GymProps) => {
    return (
        <div data-testid="gym-card">
            <h2>Gain muscle</h2>
            <button data-testid="getWorkout-gym">BUTTON</button>
          
        </div>
    )
};

export default Gym
