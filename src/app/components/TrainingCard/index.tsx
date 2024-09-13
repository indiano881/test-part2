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
          <button className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px] font-bold hover:bg-violet-600 hover:text-white">BUTTON</button>
        </div>
    )
};

export default TrainingCard
