import {useState} from 'react'
import Card from './reuseables/Card'
import Button from './reuseables/Button'
import RatingChoice from './RatingChoice'
import { v4 as uuidv4} from 'uuid'



const ReviewForm = ({onSelectedValue}) => {
    const [ratingsText, setRatingsText] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [ratingsss, setRatingsss] = useState()
    

    const textChangeHandler = (e) => {


        setRatingsText(e.target.value)

        if (ratingsText.trim().length < 10) {
            setMessage('words must be at least 10 characters')
            setIsDisabled(true)
        }else if(ratingsText.length === ''){
            setMessage(null)
            setIsDisabled(false)
        }else{
            setMessage(null)
            setIsDisabled(false)   
        }


    }

    const getRatingHandler = (rating) =>{
        setRatingsss(rating)    
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const payLoad = {
            id: Math.random()*100,
            rating: ratingsss,
            text: ratingsText
        }
        
        onSelectedValue(payLoad)
        
    }
    


    

    return(
        <div>
            <Card>
                
                <form onSubmit={onSubmitHandler}>
                    <h2>How would you rate your experience?</h2>
                    <RatingChoice onSelected={getRatingHandler} />
                    <div className="input-group">
                        <input type="text" onChange={textChangeHandler} placeholder="Leave us a review" value={ratingsText}/>
                        <Button isDisable={isDisabled}>Send</Button> 
                    </div>
                </form>
                

                {message && <div className='message'>{message}</div>}
            </Card>
        </div>
        
        
    )
}

export default ReviewForm