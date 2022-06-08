import {useState} from 'react'
import Card from './reuseables/Card'
import Button from './reuseables/Button'


const ReviewForm = () => {
    const [ratingsText, setRatingsText] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const textChangeHandler = (e) => {


        setRatingsText(e.target.value)

        if (ratingsText.trim().length < 10) {
            setMessage('words must be at least 10 characters')
            setIsDisabled(true)
        }else if(ratingsText.length === '' ){
            setMessage(null)
            setIsDisabled(false)
        }else{
            setMessage(null)
            setIsDisabled(false)   
        }


    }

    

    return(
        <Card>
            
            <form>
                <h2>How would you rate your experience?</h2>
                <div className="input-group">
                    <input type="text" onChange={textChangeHandler} placeholder="Leave us a review" value={ratingsText}/>
                    <Button isDisable={isDisabled}>Send</Button> 
                </div>
            </form>

            {message && <div className='message'>{message}</div>}
        </Card>
        
        
    )
}

export default ReviewForm