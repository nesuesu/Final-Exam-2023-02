
import { useContext } from "react";
import AnswerContext from "../contexts/AnswerContext";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import { useNavigate, useParams } from "react-router-dom";


import Answer from "./Answer";

const Answers = () => {

    const {questionid} = useParams();
    

    const { answers } = useContext(AnswerContext);
    const { questions } = useContext(QuestionContext);
    const {loggedInUser} = useContext(UserContext);

    // console.log(questions.find(question => question.id === questionid).question);

    const navigateTo = useNavigate();

    const handleNewAnswer = () => {
        navigateTo('/addanswer/'+questionid);
    }

    return ( 
        <>

        <h2>{questions && questions.find(question => question.id == questionid).question}</h2>
        
        <div className="answers">
            { (answers) ?
            (answers.filter(answer => answer.questionId.toString() === questionid.toString()).map( (answer,index) => (
                <Answer 
                    answer = {answer}
                    key = {index}
                    index = {index}
                />
            )))
            :
            (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
            }
        </div>

        {loggedInUser && <button onClick={handleNewAnswer}>Add Your Answer</button>}
        </>
    );
}

export default Answers;