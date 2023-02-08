import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";


const Question = ({question}) => {

    const {loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();


    const handleAnswers = () => {
        navigateTo('/answers/'+question.id);
    }

    const handleEdit = () => {
        alert('EDITED');
    }

    const handleRemove = () => {
        alert('REMOVED');
    }

    return (
        <>
        <h3>{question.title}</h3>
        <p>{question.question}</p>
        <p>question id: {question.id} user id: {question.userId}</p>
        <p>likes: {question.likesno} edited: {question.edited ? 'yes' : 'no'}</p>
        <p>Date : { new Date(question.id).toLocaleDateString('LT')} {new Date(question.id).toLocaleTimeString('LT')}</p>
        <button onClick={handleAnswers}>Show Answers to the Question</button>
        { (loggedInUser && question.userId.toString() === loggedInUser.id.toString()) && 
            <div>
                <button onClick={handleEdit}>Edit the Question</button>
            <button onClick={handleRemove}>Remove the Question</button>
            </div>
        }
        
        </>
    )
}

export default Question;