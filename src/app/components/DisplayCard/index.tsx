type DisplayCardprops= {
    onClick: any,
    workout: any,
    type: string
}



const DisplayCard = ({onClick, workout, type}:DisplayCardprops) => {
    const handleClick= ()=> {
        onClick("")
    }
    return (
        <div>
            <h2>{type} {workout}</h2>

          <h3>Run</h3>
          <p>3 x 800m</p>
          <h3>Sprint Intervals</h3>
          <p>10 x 100m</p>
          <button data-testid="closeBtn" onClick={handleClick} className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">BACK</button>
        </div>
    )
};

export default DisplayCard
