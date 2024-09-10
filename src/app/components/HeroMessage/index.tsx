type HeroMessageProps = {
    name:string
}

const HeroMessage = ({name}:HeroMessageProps) => {
    return (
        <div>
            <p>
                <h3>Hi {name}👋🏼 Find Your Perfect Workout!</h3>
            </p>
        </div>
    )
};

export default HeroMessage
