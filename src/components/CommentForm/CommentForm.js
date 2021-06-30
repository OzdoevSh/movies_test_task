import { useState } from 'react'
import './CommentForm.css'

function CommentForm({ movieId, saveComment }) {


    const [userInput, setUserInput] = useState('')

    const changeInput = (event) => {
        setUserInput(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput.trim() > "") {
            saveComment({
                movieId,
                comment: userInput,
            })
        }
        setUserInput('')
    }




    return (
        <div className="commentFormClass">
            <form onSubmit={handleSubmit}>
                <textarea value={userInput} type="text" onChange={changeInput} placeholder="Write a review about this movie"></textarea>
                <div><button className="addButton">Save</button></div>
            </form>
        </div>
    )
}

export default CommentForm