import {useState} from 'react'
import ReviewTab from './ReviewTab'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import ReviewContext from './context/ReviewContext'




const ReviewList = () => {
    const {reviews} = useContext(ReviewContext)
    
    if(!reviews || reviews.length === 0){
       return <p>No reviews available</p>
    }




    return(
        <div>
            <AnimatePresence>
                {reviews.map((items)=>(
                    <motion.div 
                        key={items.id} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                    >
                        <ReviewTab key={items.id} items={items}/>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
  
    )
    // return(
    //     <div>
    //         {reviews.map((items)=>(
    //             <ReviewTab onDeleteRating={deleteRatingHandler} key={items.id} items={items}/>
    //         ))}
    //     </div>
  
    // )
   

}

export default ReviewList