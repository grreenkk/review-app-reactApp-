import { useContext } from "react"
import ReviewContext from "./context/ReviewContext"


const ReviewStats = () => {
    const {reviews} = useContext(ReviewContext)
    const totalReviews = reviews.length

    let averageRating = reviews.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / totalReviews

    averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '')//To remove 0 when its a whole number

    return (
        <div className='review-statistics'>
            <h3>No of Reviews:  {totalReviews}</h3>
            <h3>Average Rating: {isNaN(averageRating)? 0 : averageRating}</h3>
        </div>
    )
}

export default ReviewStats