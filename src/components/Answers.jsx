
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnswerContext from "../contexts/AnswerContext";

import Answer from "./Answer";

const Answers = () => {

    const {questionid} = useParams();

    // alert("Answers questionid -", q);

    const { answers } = useContext(AnswerContext);

    const navigateTo = useNavigate();

    const handleNewAnswer = () => {
        navigateTo('/addanswer/'+questionid);
    }


    return (
        <>
        <h1>Answers</h1>
        { answers ?
        (answers.filter(answer => answer.questionId.toString() === questionid.toString()).map( (answer,index) => (
            <Answer 
                answer = {answer}
                key = {index}
            />
        )))
        :
        (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
        }
        <button onClick={handleNewAnswer}>Add Your Answer</button>
        </>
    );
}

export default Answers;