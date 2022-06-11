import {useState, useContext, useEffect} from 'react'
import ReviewContext from './context/ReviewContext'




const RatingChoice = ({onSelected}) => {
    const {reviewEdit} = useContext(ReviewContext)
    const [choice, setChoice] = useState()
    

    useEffect(()=>{
        setChoice(reviewEdit.item.rating)
    }, [reviewEdit])
    
    

    const selectHandler = (e) => {
        setChoice(+e.currentTarget.value)
        onSelected(+e.currentTarget.value)
    }

    return(
        <div>
            <ul className="rating">
                <li> <input id="rate1" type='radio' onChange={selectHandler} value={1} checked={choice === 1} /><label htmlFor="rate1">1</label></li>
                <li> <input id="rate2" type='radio' onChange={selectHandler} value={2} checked={choice === 2} /><label htmlFor="rate2">2</label></li>
                <li> <input id="rate3" type='radio' onChange={selectHandler} value={3} checked={choice === 3} /><label htmlFor="rate3">3</label></li>
                <li> <input id="rate4" type='radio' onChange={selectHandler} value={4} checked={choice === 4} /><label htmlFor="rate4">4</label></li>
                <li> <input id="rate5" type='radio' onChange={selectHandler} value={5} checked={choice === 5} /><label htmlFor="rate5">5</label></li>
                <li> <input id="rate6" type='radio' onChange={selectHandler} value={6} checked={choice === 6} /><label htmlFor="rate6">6</label></li>
                <li> <input id="rate7" type='radio' onChange={selectHandler} value={7} checked={choice === 7} /><label htmlFor="rate7">7</label></li>
                <li> <input id="rate8" type='radio' onChange={selectHandler} value={8} checked={choice === 8} /><label htmlFor="rate8">8</label></li>
                <li> <input id="rate9" type='radio' onChange={selectHandler} value={9} checked={choice === 9} /><label htmlFor="rate9">9</label></li>
                <li> <input id="rate10" type='radio' onChange={selectHandler} value={10} checked={choice === 10} /><label htmlFor="rate10">10</label></li>
            </ul>
        </div>
    )
}

export default RatingChoice