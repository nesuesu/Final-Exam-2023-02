import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import {useNavigate} from 'react-router-dom';

const Answer = ({answer,index}) => {

    const { questions } = useContext(QuestionContext);
    const {loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();
 
    const handleEdit = () => {
        alert('EDITED');
    }
    
    const handleRemove = () => {
        alert('REMOVED');
    }

    return (
        <>
        <div className="answer">
            {/* <h3>question : {questions.find(question => question.id.toString() === answer.questionId.toString()).question}</h3> */}
            <h3>{index+1}) {answer.answer}</h3>

            <p>answer id: {answer.id} question id: {answer.questionId} user id: {answer.userId}</p>
            <p style={{color:'red'}}>likes: {answer.likesno} edited: {answer.edited ? 'yes' : 'no'} </p>
            <p>Date : { new Date(answer.id).toLocaleDateString('LT')} {new Date(answer.id).toLocaleTimeString('LT')}</p>

            { (loggedInUser && answer.userId.toString() === loggedInUser.id.toString()) && 
            <div>
                <button onClick={handleEdit}>Edit the Answer</button>
                <button onClick={handleRemove}>Remove the Answer</button>
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

export default Answer;