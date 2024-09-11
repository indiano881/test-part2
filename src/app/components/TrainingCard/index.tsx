type TrainingCardProps= {
    title: string,
    image: string,
    bgColor: string,
    onClick: any
}




const TrainingCard = ({title, image, bgColor, onClick}:TrainingCardProps) => {
    return (
        <div>
          <h2>{title}</h2>
          <img src={image} alt={title} data-testid="card-image"/>
          <button>BUTTON</button>
        </div>
    )
};

export default TrainingCard
