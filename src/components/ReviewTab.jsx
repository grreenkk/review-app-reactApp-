import {FaTimes} from 'react-icons/fa'
import Card from './reuseables/Card'

const ReviewTab = ({items, onDeleteRating})=>{
    const handleClick = () => {
        onDeleteRating(items.id)
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