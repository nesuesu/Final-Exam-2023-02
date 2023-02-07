
import { createContext } from "react";
import { useState, useEffect } from "react";

const AnswerContext = createContext();

const AnswerProvider = ({children}) => {

    const [answers, setAnswers] = useState(null);

    const url = 'http://localhost:5000/answers';

    // STATE FUNCTIONS

    const addAnswer = (newAnswer) => {
        setAnswers([...answers, newAnswer]);
    }

    const deleteAnswer = (id) => {
        setAnswers(answers.filter(answer => answer.id.toString() !== id.toString()));
      }

    const editAnswer = (id, updatedAnswer) => {
        setAnswers(answers.map(answer => (answer.id.toString() === id.toString()) ? {...answer, ...updatedAnswer} : answer));
    }

    // CRUD FUNCTIONS

        // funkcija, kuri siunčia į serverį (postina) naują atsakymą
        const postAnswer = (newAnswer) => {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAnswer),
            });
        }

        // funkcija, kuri ištrina iš serverio atsakymą pagal id
        const removeAnswer = (id) => {
            fetch(url+"/"+id, {
                method: "DELETE",
            });
          }
          
          // funkcija, kuri pakeičią serveryje atsakymą pagal id
          const updateAnswer = (id, updatedAnswer) => {
            fetch(url+"/"+id, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedAnswer),
            });
          }


    return (
        <AnswerContext.Provider
        value={{
            answers, 
            setAnswers,
            addAnswer,
            deleteAnswer,
            editAnswer,
            postAnswer,
            removeAnswer,
            updateAnswer,
        }}
        >
            {children}
        </AnswerContext.Provider>
    )
}

export {AnswerProvider};
export default AnswerContext;