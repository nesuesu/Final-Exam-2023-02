import { useNavigate } from "react-router-dom";

const Question = ({question}) => {

    const navigateTo = useNavigate();

    const handleAnswers = () => {
        navigateTo('/answers/'+question.id);
    }

    return (
        <>
        <h3>{question.title}</h3>
        <p>{question.question}</p>
        <p>question id: {question.id} user id: {question.userId}</p>
        <button onClick={handleAnswers}>Answers</button>
        </>
    )
}

export default Question;