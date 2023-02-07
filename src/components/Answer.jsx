import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";

const Answer = ({answer}) => {

    const { questions } = useContext(QuestionContext);

    return (
        <>
        <p>question : {questions.find(question => question.id == answer.questionId).question}</p>
        <p>answer id: {answer.id} question id: {answer.questionId} user id: {answer.userId}</p>
        <p>{answer.answer}</p>
        </>
    )
}

export default Answer;