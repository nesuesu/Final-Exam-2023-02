
const Answer = ({answer}) => {
    return (
        <>
        <p>answer id: {answer.id} question id: {answer.questionId} user id: {answer.userId}</p>
        <p>{answer.answer}</p>
        </>
    )
}

export default Answer;