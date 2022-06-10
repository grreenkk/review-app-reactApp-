import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'
import ReviewData from '../../data/ReviewData'



const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [reviews, setReviews] = useState(ReviewData)

    const addReview = (payLoad) => {
        const reviewPayLoad = {
            id: uuidv4(), ...payLoad
        }

        // setReviews([payLoad, ...reviews])

        setReviews((prev)=>{
            return([reviewPayLoad, ...prev])
        })
    }
    console.log(reviews)

    const deleteReview = (id) =>{
        if(window.confirm('Are you sure want to delete your review')) {
            const currentReviews = reviews.filter((item)=>{ return item.id !== id})
            setReviews(currentReviews)
        }
        
    }

    return(
        <ReviewContext.Provider value={{reviews, addReview, deleteReview}}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewContext