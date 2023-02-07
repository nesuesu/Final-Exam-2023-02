import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";

const Answer = ({answer}) => {

    const { questions } = useContext(QuestionContext);

    console.log('answer -',answer);
    console.log('questions -',questions);

    return (
        <>
        <p>question : {questions.find(question => question.id.toString() === answer.questionId.toString()).question}</p>
        <p>Date : { new Date(answer.id).toLocaleDateString('LT')  } {new Date(answer.id).toLocaleTimeString('LT')}</p>
        <p>answer id: {answer.id} question id: {answer.questionId} user id: {answer.userId}</p>
        <p>{answer.answer}</p>
        </>
    )
}

export default Answer;