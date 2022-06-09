import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ReviewData from './data/ReviewData'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import ReviewForm from './components/ReviewForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'




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

    const getSelectedValueHandler = (userRatings) => {
        setReviews((prev)=>[userRatings, ...prev])
            
    }

    console.log(reviews)

    return (
        
            <Router>
                <Header text = 'Review App'/>
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <ReviewForm onSelectedValue={getSelectedValueHandler}/>
                            <ReviewStats reviews={reviews} />
                            <ReviewList reviews={reviews} onDeleteItem={deleteItem}/>
                            </>
                        }>
                            
                        </Route>
                    

                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
                </div>
            </Router>  
       
    )
}

export default App 