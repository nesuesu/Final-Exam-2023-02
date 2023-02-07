
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionContext from "../contexts/QuestionContext";

import Question from "./Question";

const Questions = () => {

    const {questions} = useContext(QuestionContext);

    const navigateTo = useNavigate();

    const handleNewQuestion = () => {
        navigateTo('/addquestion');
    }

    return (
        <>
        {/* <h1>Questions</h1> */}
        {questions ?
        (questions.map( (question,index) => (
                <Question
                    key = {index}
                    question = {question}
                />
                )))
        :
        (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
        }
        <br />
        <button onClick={handleNewQuestion}>Add Your Question</button>
        </>
    );
}

export default Questions;