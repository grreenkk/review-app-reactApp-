import {FaTimes} from 'react-icons/fa'
import Card from './reuseables/Card'
import { useContext } from 'react'
import ReviewContext from './context/ReviewContext'

const ReviewTab = ({items, onDeleteRating})=>{
    const {deleteReview} = useContext(ReviewContext)
    const handleClick = () => {
        
        deleteReview(items.id)
    }
  
    return(
        <Card>
            <div className="num-section">{items.rating}</div>
            <button onClick={handleClick} className='close'>
                <FaTimes color='#2d74df'/>
            </button>
            <div className="text-section">{items.text}</div>    
        </Card>
    )
}

export default ReviewTab