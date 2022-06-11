import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'
import ReviewData from '../../data/ReviewData'



const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [reviews, setReviews] = useState(ReviewData)
    const [reviewEdit, setReviewEdit] = useState({
        item: {},
        edit: false
    })

    const addReview = (payLoad) => {
        const reviewPayLoad = {
            id: uuidv4(), ...payLoad
        }

        console.log(reviewPayLoad)

        // setReviews([payLoad, ...reviews])

        setReviews((prev)=>{
            return([reviewPayLoad, ...prev])
        })
    }
    

    const deleteReview = (id) =>{
        if(window.confirm('Are you sure want to delete your review?')) {
            const currentReviews = reviews.filter((item)=>{ return item.id !== id})
            setReviews(currentReviews)
        }
        
    }

    const fillForEdit = (item) => {
        setReviewEdit({
            item,
            edit: true
        })
    }

    const EditReview = (id, upItem) => {
        setReviews(reviews.map((item)=>(item.id === id ? { ...item, ...upItem} : item))) 
        // const maniac = reviews.findIndex(items=> items.id === item.eId)
        // const manRev = reviews.filter(items=> items.id !== item.eId)
        //    setReviews(manRev)
        //    setReviews([...maniac, ...manRev])
        // setReviews([...maniac, ...manRev])
        // console.log(manRev)
        // const editPayLoad = reviews[maniac]
        // editPayLoad
        // editPayLoad
        // reviews[maniac].rating = item.rating
        // reviews[maniac].text = item.text
        // // console.log(reviews[maniac])
        // // reviews[maniac] = editPayLoad
        // setReviews([reviews[maniac], ...manRev,])
        
    }


    

    return(
        <ReviewContext.Provider 
        value={{
            reviews, 
            reviewEdit,
            addReview, 
            deleteReview,
            fillForEdit,
            EditReview
            }}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewContext