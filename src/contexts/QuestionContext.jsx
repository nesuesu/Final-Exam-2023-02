
import { createContext } from "react";
import { useState, useEffect } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({children}) => {

    const [questions, setQuestions] = useState(null);

    const url = 'http://localhost:5000/questions';

    // STATE FUNCTIONS

    const addQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
        postQuestion(newQuestion);
    }

    const deleteQuestion = (id) => {
        setQuestions(questions.filter(question => question.id.toString() !== id.toString()));
        removeQuestion(id);
      }

    const editQuestion = (id, updatedQuestion) => {
        setQuestions(questions.map(question => (question.id.toString() === id.toString()) ? {...question, ...updatedQuestion} : question));
        updateQuestion(id,updatedQuestion);
    }

    // CRUD FUNCTIONS

        // funkcija, kuri siunčia į serverį (postina) naują klausimą
        const postQuestion = (newQuestion) => {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newQuestion),
            });
        }

        // funkcija, kuri ištrina iš serverio klausimą pagal id
        const removeQuestion = (id) => {
            fetch(url+"/"+id, {
                method: "DELETE",
            });
          }
          
          
        // funkcija, kuri pakeičią serveryje klausimą pagal id
        const updateQuestion = (id, updatedQuestion) => {
            fetch(url+"/"+id, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedQuestion),
            });
          }

        // ant pirmo užkrovimo atsisiunčiam visus klausimus iš json serverio ir įsirašom juos į state kintamąjį questions
        const getQuestions = async () => {
            const data = await fetch(url)
                .then(res => res.json());
            setQuestions(data);
        }

        useEffect(() => {
            getQuestions();
        }, []);

    return (
        <QuestionContext.Provider
            value={{
                questions, 
                setQuestions,
                addQuestion,
                deleteQuestion,
                editQuestion,
                postQuestion,
                removeQuestion,
                updateQuestion,
            }}
        >
            {children}
        </QuestionContext.Provider>
    )
}

export {QuestionProvider};
export default QuestionContext;