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
          <button data-testid="getWorkout-Challenge" onClick={handleClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">Get workout</button>
        </div>
    )
};

export default DailyChallenge
