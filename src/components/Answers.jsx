
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AnswerContext from "../contexts/AnswerContext";

import Answer from "./Answer";

const Answers = () => {

    const {id} = useParams();

    // alert("Answers questionid -", q);

    const { answers } = useContext(AnswerContext);


    return (
        <>
        <h1>Answers</h1>
        { answers ?
        (answers.filter(answer => answer.questionId.toString() === id.toString()).map( (answer,index) => (
            <Answer 
                answer = {answer}
                key = {index}
            />
        )))
        :
        (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
        }
        </>
    );
}

export default Answers;