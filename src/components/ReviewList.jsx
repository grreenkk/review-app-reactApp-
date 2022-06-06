import {useState} from 'react'
import ReviewTab from './ReviewTab'



const ReviewList = ({reviews, onDeleteItem}) => {
    
    const deleteRatingHandler = (id)=> {
        onDeleteItem(id)
    }

    if(!reviews || reviews.length === 0){
       return <p>No reviews available</p>
    }
    return(
        <div>
            {reviews.map((items)=>(
                <ReviewTab onDeleteRating={deleteRatingHandler} key={items.id} items={items}/>
            ))}
        </div>
  
    )
   

}

export default ReviewList