import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import ReviewForm from './components/ReviewForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { ReviewProvider } from './components/context/ReviewContext'




const App = () => {
    return (
        <ReviewProvider>
            <Router>
                <Header text = 'Review App'/>
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <ReviewForm/>
                            <ReviewStats/>
                            <ReviewList/>
                            </>
                        }>
                            
                        </Route>
                    

                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
                </div>
            </Router> 
        </ReviewProvider>   
    )
}

export default App 