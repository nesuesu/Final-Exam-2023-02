
import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";

import Question from "./Question";

const Questions = () => {

    const {questions} = useContext(QuestionContext);

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
        </>
    );
}

export default Questions;