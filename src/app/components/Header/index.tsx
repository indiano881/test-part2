
const Header = () => {
    return (
        <div className="flex flex-col px-8 pt-2 bg-green-200 items-center">
          <h1 className="text-4xl">Training Buddy</h1>
          <div className="flex flex-col sm:flex-row p-2">
            <p data-testid="sub-Item" className="sm:text-2xl sm:p-8">No equippment needed!</p>
            <p data-testid="sub-Item" className="sm:text-2xl sm:p-8">Train everywhere</p>
            <p data-testid="sub-Item" className="sm:text-2xl sm:p-8">Stay healthy</p>
          </div>
        </div>
    )
};

export default Header
