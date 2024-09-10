
const Header = () => {
    return (
        <div className="flex flex-col p-8">
          <h1>Training Buddy</h1>
          <div className="flex flex-row">
            <p data-testid="sub-Item" className=" p-8">alfa</p>
            <p data-testid="sub-Item" className="p-8">beta</p>
            <p data-testid="sub-Item" className="p-8">delta</p>
          </div>
        </div>
    )
};

export default Header
