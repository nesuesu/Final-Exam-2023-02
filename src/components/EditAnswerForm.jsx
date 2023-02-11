import { useContext, useState } from "react";
import AnswerContext from "../contexts/AnswerContext";

import { useNavigate, useParams } from "react-router-dom";


const EditAnswerForm = () => {

    const {answers, editAnswer} = useContext(AnswerContext);
    const {answerid} = useParams(); 
    const currentAnswer = answers.find(answer => answer.id.toString() === answerid.toString()).answer;
    const [inputAnswer, setInputAnswer] = useState(currentAnswer); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.answer.value !== currentAnswer) {
            const updatedAnswer = {
                "answer":e.target.answer.value,
                "edited": Date.now(),
            }
            editAnswer(answerid, updatedAnswer);
        }
        
        navigateTo(-1);
    }

    return (
        <>
        <div className="forma">
            <h1>Edit Your Answer</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="answer">
                    <textarea 
                        name="answer" 
                        id="answer" 
                        cols="30" rows="10" 
                        value={inputAnswer}
                        onChange={(e) => setInputAnswer(e.target.value)}>
                    </textarea>
                </label>
                {/* <input type="submit" value="Submit"/>   */}
                <button type="submit">Edit Answer</button>
            </form>
        </div>
        </>
    );
}

export default EditAnswerForm;