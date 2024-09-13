type DailyChallengeProps = {
    updateFunction:any
}

const DailyChallenge = ({updateFunction}:DailyChallengeProps) => {
    const handleClick = ()=> {
        updateFunction("Challenge")
    }

    return (
        <div data-testid="challenge-card">
          <h2>Challenge</h2>
          <button data-testid="getWorkout-Challenge" onClick={handleClick}>BUTTON</button>
        </div>
    )
};

export default DailyChallenge
