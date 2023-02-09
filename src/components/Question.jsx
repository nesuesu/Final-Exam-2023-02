import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";
import QuestionContext from "../contexts/QuestionContext";


const Question = ({question, index}) => {

    const {loggedInUser} = useContext(UserContext);

    const {deleteQuestion} = useContext(QuestionContext);

    const navigateTo = useNavigate();


    const handleAnswers = () => {
        navigateTo('/answers/'+question.id);
    }

    const handleEdit = () => {
        navigateTo(`/editquestion/`+question.id);
    }

    const handleRemove = () => {
        deleteQuestion(question.id);
    }

    return (
        <>
        <div className="question">
            <h3>{index+1}) {question.question}</h3>
            <p>Title: {question.title}</p>
            <p>question id: {question.id} user id: {question.userId}</p>
            <p style={{color:'red'}}>likes: {question.likesno} edited: {question.edited ? 'yes' : 'no'} </p>
            <p>Date : { new Date(question.id).toLocaleDateString('LT')} {new Date(question.id).toLocaleTimeString('LT')}</p>
            <button onClick={handleAnswers}>Show Answers to the Question</button>
            { (loggedInUser && question.userId.toString() === loggedInUser.id.toString()) && 
                <div>
                    <button onClick={handleEdit}>Edit the Question</button>
                    <button onClick={handleRemove}>Remove the Question</button>
                </div>
            }
            
            { (loggedInUser) && 
                <div>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            }
        </div>
        
        </>
    )
}

export default Question;