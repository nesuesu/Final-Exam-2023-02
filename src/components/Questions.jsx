
import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";


import Question from "./Question";

const Questions = () => {

    const {questions} = useContext(QuestionContext);
    const {loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();

    const handleNewQuestion = () => {
        navigateTo('/addquestion');
    }

    return (
        <>
        {/* <h1>Questions</h1> */}
        {loggedInUser && <button onClick={handleNewQuestion}>Add Your Question</button>}
        <div className="questions">
            {questions ?
            (questions.map( (question,index) => (
                    <Question
                        key = {index}
                        question = {question}
                        index = {index}
                    />
                    )))
            :
            (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
            }
        </div>
        </>
    );
}

export default Questions;