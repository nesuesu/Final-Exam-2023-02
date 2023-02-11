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
        <div className="forma">
            <h1>Add Your Answer</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="answer">
                    <textarea name="answer" id="answer" cols="30" rows="10" placeholder="Type your answer here..."></textarea>
                </label>
                {/* <input type="submit" value="Submit"/>   */}
                <button type="submit">Add Answer</button>
            </form>
        </div>
        </>
    );
}

export default AddAnswerForm;