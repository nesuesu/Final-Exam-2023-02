import { useContext } from "react";
import AnswerContext from "../contexts/AnswerContext";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import {useNavigate} from 'react-router-dom';

const Answer = ({answer,index}) => {

    const {deleteAnswer, editAnswer} = useContext(AnswerContext);

    const { questions } = useContext(QuestionContext);

    const {loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();
 
    const handleEdit = () => {
        navigateTo(`/editanswer/${answer.id}`);
    }
    
    const handleRemove = () => {
        deleteAnswer(answer.id);
    }

    const handleLike = () => {
        const likedarr = answer.likedusers;
        const dislikedarr = answer.dislikedusers;

        if (!likedarr.includes(loggedInUser.id)) {
            const likecount = likedarr.push(loggedInUser.id);

            if (dislikedarr.includes(loggedInUser.id)) {
                const index = dislikedarr.indexOf(loggedInUser.id);
                dislikedarr.splice(index,1);
            }

            editAnswer(answer.id, {
                likedusers:likedarr,
                dislikedusers:dislikedarr,
            });
        }
    }

    const handleDislike = () => {
        // editAnswer(answer.id, {likesno:(answer.likesno-1)});
        const dislikedarr = answer.dislikedusers;
        const likedarr = answer.likedusers;

        if (!dislikedarr.includes(loggedInUser.id)) {
            const dislikecount = dislikedarr.push(loggedInUser.id);

            if (likedarr.includes(loggedInUser.id)) {
                const index = likedarr.indexOf(loggedInUser.id);
                likedarr.splice(index,1);
            }

            editAnswer(answer.id, {
                dislikedusers:dislikedarr,
                likedusers:likedarr,
            });
        }


    }

    return (
        <>
        <div className="post">
            {/* <h3>question : {questions.find(question => question.id.toString() === answer.questionId.toString()).question}</h3> */}
            <h3 style={{color:'black'}}>{index+1}) {answer.answer}</h3>
            <div className="info">
                <p>answer id: {answer.id} question id: {answer.questionId} user id: {answer.userId}</p>
                <p style={{color:'red'}}>likes: {answer.likedusers.length} dislikes: {answer.dislikedusers.length} </p>
                <p style={{color:'blue'}}>edited: {answer.edited ? 'yes' : 'no'}</p>
            </div>
            <p>Date : { new Date(answer.id).toLocaleDateString('LT')} {new Date(answer.id).toLocaleTimeString('LT')}</p>
            <br />

            { (loggedInUser && answer.userId.toString() === loggedInUser.id.toString()) && 
            <div>
                <button onClick={handleEdit}>Edit the Answer</button>
                <button onClick={handleRemove}>Remove the Answer</button>
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

export default Answer;