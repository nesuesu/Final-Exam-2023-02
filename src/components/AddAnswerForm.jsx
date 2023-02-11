import { useContext } from "react";
import AnswerContext from "../contexts/AnswerContext";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import { useNavigate, useParams } from "react-router-dom";



const AddAnswerForm = () => {

    const {answers, addAnswer} = useContext(AnswerContext);

    const {editQuestion} = useContext(QuestionContext);

    const {loggedInUser} = useContext(UserContext);

    const {questionid} = useParams(); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.answer.value !== '' ) {
            const newAnswer = {
                "id":Date.now(),
                "questionId":questionid,
                "answer":e.target.answer.value,
                "userId": loggedInUser.id,
                "likedusers": [],
                "dislikedusers": [],
                "edited": false
            }
            addAnswer(newAnswer);

            const answerno = answers.filter(answer => answer.questionId.toString() === questionid.toString()).length+1;
            editQuestion(questionid, { 
                "answerno": answerno
            })
        }            

        navigateTo(-1);

    }

    return (
        <>
        <h1>Add Answer</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="answer">Your Answer:
                <textarea name="answer" id="answer" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Submit"/>  
        </form>
        </>
    );
}

export default AddAnswerForm;