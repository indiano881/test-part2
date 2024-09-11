type DailyChallengeProps = {
    updateFunction:any
}

const DailyChallenge = ({updateFunction}:DailyChallengeProps) => {
    

    return (
        <div data-testid="challenge-card">
          <h2>Challenge</h2>
          <button data-testid="getWorkout-Challenge" >BUTTON</button>
        </div>
    )
};

export default DailyChallenge
