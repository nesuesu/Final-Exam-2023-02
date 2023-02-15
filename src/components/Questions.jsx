
import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Question from "./Question";

const Questions = () => {

    const {questions} = useContext(QuestionContext);
    const {users, loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();

    const [sortMethod, setSortMethod] = useState('date');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterQuestions, setFilterQuestions] = useState('allquestions');

    const sortQuestions = (qqq) => {
        let sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );
        if (sortOrder === 'asc') {
            switch (sortMethod) {
                case ('date'):
                    sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );
                    break;
                case ('title'):
                    sorter = (a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : ( (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 0 );
                    break;
                case ('likes'):
                    sorter = (a, b) => a.likedusers.length > b.likedusers.length ? 1 : ( (a.likedusers.length < b.likedusers.length) ? -1 : 0 );
                    break;
                case ('answers'):
                    sorter = (a, b) => a.answerno > b.answerno ? 1 : ( (a.answerno < b.answerno) ? -1 : 0 );
                    break;
                case ('author'):
                    sorter = (a, b) => users.find(user => user.id.toString() === a.userId.toString()).username > users.find(user => user.id.toString() === b.userId.toString()).username ? 1 : ( (users.find(user => user.id.toString() === a.userId.toString()).username < users.find(user => user.id.toString() === b.userId.toString()).username) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        } else if (sortOrder === 'desc') {
            switch (sortMethod) {
                case ('date'):
                    sorter = (a, b) => a.id < b.id ? 1 : ( (a.id > b.id) ? -1 : 0 );
                    break;
                case ('title'):
                    sorter = (a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : ( (a.title.toLowerCase() > b.title.toLowerCase()) ? -1 : 0 );
                    break;
                case ('likes'):
                    sorter = (a, b) => a.likedusers.length < b.likedusers.length ? 1 : ( (a.likedusers.length > b.likedusers.length) ? -1 : 0 );
                    break;
                case ('answers'):
                    sorter = (a, b) => a.answerno < b.answerno ? 1 : ( (a.answerno > b.answerno) ? -1 : 0 );
                    break;
                case ('author'):
                    sorter = (a, b) => users.find(user => user.id.toString() === a.userId.toString()).username < users.find(user => user.id.toString() === b.userId.toString()).username ? 1 : ( (users.find(user => user.id.toString() === a.userId.toString()).username > users.find(user => user.id.toString() === b.userId.toString()).username) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        }
        return qqq.sort(sorter);
    }

    const filteredQuestions = (questions) => {
        const q = questions.filter((question) => { 
            switch (filterQuestions) {
                case ('allquestions'):
                    return true;
                case ('answered'):
                    if (question.answerno > 0) return true;
                    else return false;
                case ('unanswered'):
                    if (question.answerno === 0) return true;
                    else return false;
                default:
                    break;
            }
        });
        return q;
    }

    const handleNewQuestion = () => {
        navigateTo('/addquestion');
    }

    return (
        <>
        {loggedInUser && <button className="add" onClick={handleNewQuestion} style={{color:'red'}}>ADD YOUR QUESTION</button>}

        <form className="filters">
        <label >Sort by: 
            <select values={sortMethod} onChange={(e) => setSortMethod(e.target.value)} name="sort" id="">
                <option value="date" >date</option>
                <option value="title" >title</option>
                <option value="likes" >likes</option>
                <option value="answers" >answers</option>
                <option value="author" >author</option>
            </select>
        </label>
        <label >Order:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} name="order" id="">
                <option value="asc">ascending</option>
                <option value="desc">descending</option>
            </select>
        </label>
        <label >Filter:
            <select value={filterQuestions} onChange={(e) => setFilterQuestions(e.target.value)} name="filter" id="">
                <option value="allquestions">All Questions</option>
                <option value="answered">Answered Questions</option>
                <option value="unanswered">Unanswered Questions</option>
            </select>
        </label>
        </form>

        <div className='posts'>        
            { questions ?
            (sortQuestions(filteredQuestions(questions)).map( (question,index) => (
                    <Question
                        key = {index}
                        question = {question}
                        index = {index}
                    />
                    ))
            )
            :
            (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
            }
        </div>
        </>
    );
}

export default Questions;