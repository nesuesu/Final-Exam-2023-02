import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import { useNavigate, useParams } from "react-router-dom";

const AddQuestionForm = () => {

    const {addQuestion} = useContext(QuestionContext);
    const {loggedInUser} = useContext(UserContext);

    const {questionid} = useParams(); 

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {
            "id":Date.now(),
            "title":e.target.title.value,
            "question":e.target.question.value,
            "userId": loggedInUser.id,
            "likedusers": [],
            "dislikedusers": [],
            "edited": false,
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