
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionContext from "../contexts/QuestionContext";

import Question from "./Question";

const Questions = () => {

    const {questions} = useContext(QuestionContext);

    const navigateTo = useNavigate();

    const handleNewQuestion = () => {
        navigateTo('/addquestion');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const [sort, order] = [e.target.sort.value, e.target.order.value]
        console.log('sort by:', sort, 'order: ', order);
        const sorted = questions;
         
        let sorter = (a, b) => a.id > b.id ? 1 : ( (a.id < b.id) ? -1 : 0 );

        if (order === 'asc') {
            switch (sort) {
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
        } else if (order === 'desc') {
            switch (sort) {
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
        
        sorted.sort(sorter);
        console.log('by:', sort, sorted);
    }

    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Sort by: 
            <select name="sort" id="">
                {/* <option value="none">none</option> */}
                <option value="date">by date</option>
                <option value="title">by title</option>
                <option value="likes">by likes no</option>
            </select>
            <select name="order" id="">
                {/* <option value="none">none</option> */}
                <option value="asc">ascending</option>
                <option value="desc">descending</option>
            </select>
            </label>
            <input type="submit" />
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