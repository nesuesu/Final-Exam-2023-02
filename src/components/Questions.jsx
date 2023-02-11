
import { useContext } from "react";
import QuestionContext from "../contexts/QuestionContext";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Question from "./Question";

const Questions = () => {

    const {questions, setQuestions} = useContext(QuestionContext);
    const {loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();

    const handleNewQuestion = () => {
        navigateTo('/addquestion');
    }


    const [selected, setSelected] = useState('date');

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);

        let sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );

        if (selectedOrder === 'asc') {
            switch (event.target.value) {
                case ('date'):
                    sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );
                    break;
                case ('title'):
                    sorter = (a, b) => a.title > b.title ? 1 : ( (a.title < b.title) ? -1 : 0 );
                    break;
                case ('likes'):
                    sorter = (a, b) => a.likedusers.length > b.likedusers.length ? 1 : ( (a.likedusers.length < b.likedusers.length) ? -1 : 0 );
                    break;
                case ('answer'):
                    sorter = (a, b) => a.answerno > b.answerno ? 1 : ( (a.answerno < b.answerno) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        } else if (selectedOrder === 'desc') {
            switch (event.target.value) {
                case ('date'):
                    sorter = (a, b) => a.id < b.id ? 1 : ( (a.id > b.id) ? -1 : 0 );
                    break;
                case ('title'):
                    sorter = (a, b) => a.title < b.title ? 1 : ( (a.title > b.title) ? -1 : 0 );
                    break;
                case ('likes'):
                    sorter = (a, b) => a.likedusers.length < b.likedusers.length ? 1 : ( (a.likedusers.length > b.likedusers.length) ? -1 : 0 );
                    break;
                case ('answers'):
                    sorter = (a, b) => a.answerno < b.answerno ? 1 : ( (a.answerno > b.answerno) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        }
        const sorted = [...questions];
        sorted.sort(sorter);
        setQuestions(sorted);
    };

    
    const [selectedOrder, setSelectedOrder] = useState('asc');

    const handleChangeOrder = event => {
        console.log(event.target.value);
        setSelectedOrder(event.target.value);

        let sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );

        if (selected === 'date') {
            switch (event.target.value) {
                case ('asc'):
                    sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );
                    break;
                case ('desc'):
                    sorter = (a, b) => a.id < b.id ? 1 : ( (a.id > b.id) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        };
        if (selected === 'title') {
            switch (event.target.value) {
                case ('asc'):
                    sorter = (a, b) => a.title > b.title ? 1 : ( (a.title < b.title) ? -1 : 0 );
                    break;
                case ('desc'):
                    sorter = (a, b) => a.title < b.title ? 1 : ( (a.title > b.title) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        };
        if (selected === 'likes') {
            switch (event.target.value) {
                case ('asc'):
                    sorter = (a, b) => a.likedusers.length > b.likedusers.length ? 1 : ( (a.likedusers.length < b.likedusers.length) ? -1 : 0 );
                    break;
                case ('desc'):
                    sorter = (a, b) => a.likedusers.length < b.likedusers.length ? 1 : ( (a.likedusers.length > b.likedusers.length) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        };
        if (selected === 'answers') {
            switch (event.target.value) {
                case ('asc'):
                    sorter = (a, b) => a.answerno > b.answerno ? 1 : ( (a.answerno < b.answerno) ? -1 : 0 );
                    break;
                case ('desc'):
                    sorter = (a, b) => a.answerno < b.answerno ? 1 : ( (a.answerno > b.answerno) ? -1 : 0 );
                    break;
                default:
                    break;
            }
        };
        const sorted = [...questions];
        sorted.sort(sorter);
        setQuestions(sorted);
    };


        const [selectedFilter, setSelectedFilter] = useState('allquestions');
        
        const handleChangeFilter = (e) => {
            console.log(e.target.value);
            setSelectedFilter(e.target.value);

            let sorted = [...questions];

            switch (e.target.value) {
                case ('allquestions'):
                    sorted = questions;
                    window.location.reload();
                    break;
                case ('answered'):
                    sorted = questions.filter(question => question.answerno > 0);
                    break;
                case ('unanswered'):
                    sorted = questions.filter(question => question.answerno === 0);
                    break;
                default:
                    break;
            }
            setQuestions(sorted);
        }


    return (
        <>
        {loggedInUser && <button className="add" onClick={handleNewQuestion} style={{color:'red'}}>ADD YOUR QUESTION</button>}

        <form className="filters">
        <label htmlFor="">Sort by: 
            <select values={selected} onChange={handleChange} name="sort" id="">
                <option value="date" >date</option>
                <option value="title" >title</option>
                <option value="likes" >likes</option>
                <option value="answers" >answers</option>
            </select>
        </label>
        <label htmlFor="">Order:
            <select value={selectedOrder} onChange={handleChangeOrder} name="order" id="">
                <option value="asc">ascending</option>
                <option value="desc">descending</option>
            </select>
        </label>
        <label htmlFor="">Filter:
            <select value={selectedFilter} onChange={handleChangeFilter} name="filter" id="">
                <option value="allquestions">All Questions</option>
                <option value="answered">Answered Questions</option>
                <option value="unanswered">Unanswered Questions</option>
            </select>
        </label>
        {/* <input type="submit" value="Refresh"/> */}
        </form>

        <div className="posts">        
        {questions ?
        (questions.map( (question,index) => (
                <Question
                    key = {index}
                    question = {question}
                    index = {index}
                />
                )))
        :
        (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
        }
        </div>
        </>
    );
}

export default Questions;