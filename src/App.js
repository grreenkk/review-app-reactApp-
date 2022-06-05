import { useState } from 'react'
import Header from './components/Header'
import ReviewTab from './components/ReviewTab'
import ReviewData from './data/ReviewData'
import ReviewList from './components/ReviewList'


const App = () => {
    const [reviewTexts, setReviewTexts] = useState(ReviewData)
    

    return (
        <>
            <Header text = 'Hello World'/>
            <div className="container">
                <ReviewList reviews={reviewTexts}/>
            </div>
        </>    
    )
}

export default App