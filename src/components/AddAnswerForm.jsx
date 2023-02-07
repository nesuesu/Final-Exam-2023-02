import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnswerContext from "../contexts/AnswerContext";

const AddAnswerForm = () => {

    const {addAnswer} = useContext(AnswerContext);

    const {questionid} = useParams(); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.answer.value);

        const newRecord = {
            "id":Date.now(),
            "questionId":questionid,
            "answer":e.target.answer.value,
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