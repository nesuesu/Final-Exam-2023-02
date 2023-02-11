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

        if (e.target.question.value !== '' || e.target.title.value !== '' ) {
            const newRecord = {
                "id":Date.now(),
                "title":e.target.title.value,
                "question":e.target.question.value,
                "userId": loggedInUser.id,
                "likedusers": [],
                "dislikedusers": [],
                "edited": false,
                "answerno": 0,
            }
            addQuestion(newRecord);
        }
        
        navigateTo('/questions');

    }

    return (
        <>
        <div className="forma">
            <h1>Add Your Question</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title:
                    <input type="text" name="title" placeholder="Type your title here..."/>
                </label>
                <label htmlFor="question">Question:
                    <textarea name="question" id="question" cols="30" rows="10" placeholder="Type your question here..."></textarea>
                </label>
                {/* <input type="submit" value="Submit"/>   */}
                <button type="submit">Add Question</button>
            </form>
        </div>
        </>
    );
}

export default AddQuestionForm;