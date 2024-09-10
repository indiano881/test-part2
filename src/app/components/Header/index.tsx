
const Header = () => {
    return (
        <div className="flex flex-col p-8">
          <h1>Training Buddy</h1>
          <div className="flex flex-row">
            <p data-testid="sub-Item" className=" p-8">No equippment needed!</p>
            <p data-testid="sub-Item" className="p-8">Train everywhere</p>
            <p data-testid="sub-Item" className="p-8">Stay healthy</p>
          </div>
        </div>
    )
};

export default Header
