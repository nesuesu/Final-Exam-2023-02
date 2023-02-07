import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionContext from "../contexts/QuestionContext";

const AddQuestionForm = () => {

    const {addQuestion} = useContext(QuestionContext);

    const {questionid} = useParams(); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.question.value);

        const newRecord = {
            "id":Date.now(),
            "title":e.target.title.value,
            "question":e.target.question.value,
        }
        addQuestion(newRecord);
        navigateTo('/questions');

    }

    return (
        <>
        <h1>Add Question</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Title:
                <input type="text" name="title"/>
            </label>
            <label htmlFor="question">Your Question:
                <textarea name="question" id="question" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Submit"/>  
        </form>
        </>
    );
}

export default AddQuestionForm;