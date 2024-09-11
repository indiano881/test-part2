type DisplayCardprops= {
    onClick: any,
    workout: any,
    type: string
}



const DisplayCard = ({onClick, workout, type}:DisplayCardprops) => {
    return (
        <div>
          <h3>Run</h3>
          <p>3 x 800m</p>
          <h3>Sprint Intervals</h3>
          <p>10 x 100m</p>
          <button data-testid="closeBtn">BACK</button>
        </div>
    )
};

export default DisplayCard
