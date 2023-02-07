
import { useContext } from "react";
import AnswerContext from "../contexts/AnswerContext";

import Answer from "./Answer";

const Answers = () => {

    const { answers } = useContext(AnswerContext);

    return (
        <>
        <h1>Answers</h1>
        { answers ?
        (answers.filter(answer => answer.userId === 3).map( (answer,index) => (
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