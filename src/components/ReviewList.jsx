import {useState} from 'react'
import ReviewTab from './ReviewTab'



const ReviewList = ({reviews}) => {
    
    
    return(
        <div>
            {reviews.map((item)=>(
                <ReviewTab key={item.id} rating={item.rating} text={item.text}/>
            ))}
        </div>
  
    )
   

}

export default ReviewList