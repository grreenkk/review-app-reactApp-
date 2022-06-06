import { useState } from 'react'
import Header from './components/Header'
import ReviewData from './data/ReviewData'
import ReviewList from './components/ReviewList'



const App = () => {
    const [reviewTexts, setReviewTexts] = useState(ReviewData)

    const deleteItem = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            const curReviews = reviewTexts.filter((texts)=>{
                return texts.id != id
            })        
    
            setReviewTexts(curReviews)
        }
    }

    return (
        <>
            <Header text = 'Hello World'/>
            <div className="container">
                <ReviewList reviews={reviewTexts} onDeleteItem={deleteItem}/>
            </div>
        </>    
    )
}

export default App