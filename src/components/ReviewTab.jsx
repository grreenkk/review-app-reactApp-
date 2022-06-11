import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './reuseables/Card'
import { useContext } from 'react'
import ReviewContext from './context/ReviewContext'

const ReviewTab = ({items})=>{
    const {deleteReview, fillForEdit} = useContext(ReviewContext)

    const editClickHandler = () => {
        console.log(items.id)
        fillForEdit(items)
    }

    const handleClick = () => {
        
        deleteReview(items.id)
    }
  
    return(
        <Card>
            <div className="num-section">{items.rating}</div>
            <button onClick={handleClick} className='close'>
                <FaTimes color='#2d74df'/>
            </button>
            <button onClick={editClickHandler} className='edit'>
                <FaEdit color='#2d74df'/>
            </button>
            <div className="text-section">{items.text}</div>    
        </Card>
    )
}

export default ReviewTab