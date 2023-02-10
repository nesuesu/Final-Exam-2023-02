import { useContext, useState } from "react";
import QuestionContext from "../contexts/QuestionContext";

import { useNavigate, useParams } from "react-router-dom";


const EditQuestionForm = () => {

    const {questions, editQuestion} = useContext(QuestionContext);
    const {questionid} = useParams(); 
    const currentQuestion = questions.find(question => question.id.toString() === questionid.toString()).question;
    const [inputQuestion, setInputQuestion] = useState(currentQuestion); 

    const currentTitle = questions.find(question => question.id.toString() === questionid.toString()).title;
    const [inputTitle, setInputTitle] = useState(currentTitle); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.question.value !== currentQuestion || e.target.title.value !== currentTitle) {
            const updatedQuestion = {
                "question":e.target.question.value,
                "title":e.target.title.value,
                "edited": Date.now(),
            }
            editQuestion(questionid, updatedQuestion);
        }
        
        navigateTo(-1);
    }

    return (
        <>
        <h1>Edit Your Question</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Edit Title:
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
            </label>

            <label htmlFor="question">Edit Question:
                <textarea 
                    name="question" 
                    id="question" 
                    cols="30" rows="10" 
                    value={inputQuestion}
                    onChange={(e) => setInputQuestion(e.target.value)}>
                </textarea>
            </label>

            <input type="submit" value="Submit"/>  
        </form>
        </>
    );
}

export default EditQuestionForm;