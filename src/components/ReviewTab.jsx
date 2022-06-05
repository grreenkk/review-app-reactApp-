

const ReviewTab = ({rating, text})=>{
    
  
    return(
        <div className="card">
            <div className="num-section">{rating}</div>
            <div className="text-section">{text}</div>    
        </div>
    )
}

export default ReviewTab