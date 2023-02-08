import { useContext } from "react";
import AnswerContext from "../contexts/AnswerContext";
import UserContext from "../contexts/UserContext";

import { useNavigate, useParams } from "react-router-dom";


const AddAnswerForm = () => {

    const {addAnswer} = useContext(AnswerContext);

    const {loggedInUser} = useContext(UserContext);

    const {questionid} = useParams(); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {
            "id":Date.now(),
            "questionId":questionid,
            "answer":e.target.answer.value,
            "userId": loggedInUser.id,
            "likesno": 0,
            "edited": false
        }
        addAnswer(newRecord);
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