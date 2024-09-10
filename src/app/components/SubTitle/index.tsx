
type SubTitleProps= {
    title:string
}

const SubTitle = ({title}:SubTitleProps) => {
    return (
        <div>
          <h3>{title}</h3>
        </div>
    )
};

export default SubTitle
