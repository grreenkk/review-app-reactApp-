import { useState } from 'react'
import Header from './components/Header'
import ReviewData from './data/ReviewData'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'



const App = () => {
    const [reviews, setReviews] = useState(ReviewData)

    const deleteItem = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            const curReviews = reviews.filter((texts)=>{
                return texts.id != id
            })        
    
            setReviews(curReviews)
        }
    }

    return (
        <>
            <Header text = 'Hello World'/>
            <div className="container">
                <ReviewStats reviews={reviews} />
                <ReviewList reviews={reviews} onDeleteItem={deleteItem}/>
            </div>
        </>    
    )
}

export default App