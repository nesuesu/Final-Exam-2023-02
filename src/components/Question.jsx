import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";
import QuestionContext from "../contexts/QuestionContext";


const Question = ({question, index}) => {

    const {loggedInUser} = useContext(UserContext);

    const {deleteQuestion, editQuestion} = useContext(QuestionContext);

    const navigateTo = useNavigate();


    const handleAnswers = () => {
        navigateTo('/answers/'+question.id);
    }

    const handleEdit = () => {
        navigateTo(`/editquestion/`+question.id);
    }

    const handleRemove = () => {
        deleteQuestion(question.id);
    }

    const handleLike = () => {
        const likedarr = question.likedusers;
        const dislikedarr = question.dislikedusers;

        if (!likedarr.includes(loggedInUser.id)) {
            const likecount = likedarr.push(loggedInUser.id);

            if (dislikedarr.includes(loggedInUser.id)) {
                const index = dislikedarr.indexOf(loggedInUser.id);
                dislikedarr.splice(index,1);
            }

            editQuestion(question.id, {
                likedusers:likedarr,
                dislikedusers:dislikedarr,
            });
        }
    }

    const handleDislike = () => {
        // editAnswer(answer.id, {likesno:(answer.likesno-1)});
        const dislikedarr = question.dislikedusers;
        const likedarr = question.likedusers;

        if (!dislikedarr.includes(loggedInUser.id)) {
            const dislikecount = dislikedarr.push(loggedInUser.id);

            if (likedarr.includes(loggedInUser.id)) {
                const index = likedarr.indexOf(loggedInUser.id);
                likedarr.splice(index,1);
            }

            editQuestion(question.id, {
                dislikedusers:dislikedarr,
                likedusers:likedarr,
            });
        }
    }


    return (
        <>
        <div className="question">
            <h3>{index+1}) {question.question}</h3>
            <p>Title: {question.title}</p>
            <p>question id: {question.id} user id: {question.userId}</p>
            <p style={{color:'red'}}>likes: {question.likedusers.length} dislikes: {question.dislikedusers.length} </p>
            <p style={{color:'blue'}}>edited: {question.edited ? 'yes' : 'no'}</p>
            <p>Date : { new Date(question.id).toLocaleDateString('LT')} {new Date(question.id).toLocaleTimeString('LT')}</p>
            <button onClick={handleAnswers}>Show Answers to the Question</button>
            { (loggedInUser && question.userId.toString() === loggedInUser.id.toString()) && 
                <div>
                    <button onClick={handleEdit}>Edit the Question</button>
                    <button onClick={handleRemove}>Remove the Question</button>
                </div>
            }
            
            { (loggedInUser) && 
                <div>
                    <button onClick={handleLike}>Like</button>
                    <button onClick={handleDislike}>Dislike</button>
                </div>
            }
        </div>
        
        </>
    )
}

export default Question;