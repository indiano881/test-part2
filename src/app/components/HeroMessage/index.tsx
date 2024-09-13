type HeroMessageProps = {
    name:string
}

const HeroMessage = ({name}:HeroMessageProps) => {
    return (
        
            <p className="flex justify-center ">
                <h3 className="text-2xl m-4">Hi {name}👋🏼 Find Your Perfect Workout!</h3>
            </p>
       
    )
};

export default HeroMessage
