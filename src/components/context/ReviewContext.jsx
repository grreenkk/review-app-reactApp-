import {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4} from 'uuid'
import ReviewData from '../../data/ReviewData'



const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [reviewEdit, setReviewEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchReviews()
    }, [])

    const fetchReviews = async ()=>{
        const response = await fetch(`/reviews?_sort=id&_order=desc`)

        const data = await response.json()

        console.log(data)

        setReviews(data)
        setIsLoading(false)
    }


    //ADD REVIEW
    const addReview = async (payLoad) => {
        const response = await fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payLoad),

        })

        const data = await response.json()

        // console.log(reviewPayLoad)

        // setReviews([payLoad, ...reviews])

        setReviews((prev)=>{
            return([data, ...prev])
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
            isLoading,
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