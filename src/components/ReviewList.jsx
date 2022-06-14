import {useState} from 'react'
import ReviewTab from './ReviewTab'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import ReviewContext from './context/ReviewContext'
import Loading from './reuseables/Loading'




const ReviewList = () => {
    const {reviews, isLoading} = useContext(ReviewContext)
    
    // if(!reviews || reviews.length === 0){
    //    return <p>No reviews available</p>
    // }
    



    return isLoading ? <Loading/> : <div>
    {!isLoading  && <AnimatePresence>
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
    </AnimatePresence>}
    {isLoading && <img src="assets/loading.gif" />}
</div>
    // return(
    //     <div>
    //         {!isLoading  && <AnimatePresence>
    //             {reviews.map((items)=>(
    //                 <motion.div 
    //                     key={items.id} 
    //                     initial={{ opacity: 0 }} 
    //                     animate={{ opacity: 1 }} 
    //                     exit={{ opacity: 0 }}
    //                 >
    //                     <ReviewTab key={items.id} items={items}/>
    //                 </motion.div>
    //             ))}
    //         </AnimatePresence>}
    //         {isLoading && <img src="assets/loading.gif" />}
    //     </div>
  
    // )
    // return(
    //     <div>
    //         {reviews.map((items)=>(
    //             <ReviewTab onDeleteRating={deleteRatingHandler} key={items.id} items={items}/>
    //         ))}
    //     </div>
  
    // )
   

}

export default ReviewList