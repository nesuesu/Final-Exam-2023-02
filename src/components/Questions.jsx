
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionContext from "../contexts/QuestionContext";

import { useState, useEffect } from "react";

import Question from "./Question";

const Questions = () => {

    const {questions, setQuestions} = useContext(QuestionContext);

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
                    sorter = (a, b) => a.likesno > b.likesno ? 1 : ( (a.likesno < b.likesno) ? -1 : 0 );
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
                    sorter = (a, b) => a.likesno < b.likesno ? 1 : ( (a.likesno > b.likesno) ? -1 : 0 );
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
            }
        };
        if (selected === 'likes') {
            switch (event.target.value) {
                case ('asc'):
                    sorter = (a, b) => a.likesno > b.likesno ? 1 : ( (a.likesno < b.likesno) ? -1 : 0 );
                    break;
                case ('desc'):
                    sorter = (a, b) => a.likesno < b.likesno ? 1 : ( (a.likesno > b.likesno) ? -1 : 0 );
                    break;
            }
        };
        const sorted = [...questions];
        sorted.sort(sorter);
        setQuestions(sorted);
    };


    return (
        <>
        
        <form >

            <label htmlFor="">Sort by: 
                <select values={selected} onChange={handleChange} name="sort" id="">
                {/* <select  onChange={(e) => setSortType(e.target.value)} name="sort" id=""> */}
                    <option value="date" >by date</option>
                    <option value="title" >by title</option>
                    <option value="likes" >by likes no</option>
                </select>
            </label>

            <label htmlFor="">Order:
                <select value={selectedOrder} onChange={handleChangeOrder} name="order" id="">
                    <option value="asc">ascending</option>
                    <option value="desc">descending</option>
                </select>
            </label>
            
        </form>

        <h1>Questions</h1>
        {questions ?
        (questions.map( (question,index) => (
                <Question
                    key = {index}
                    question = {question}
                />
                )))
        :
        (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
        }
        <br />
        <button onClick={handleNewQuestion}>Add Your Question</button>
        </>
    );
}

export default Questions;