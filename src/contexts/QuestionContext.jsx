
import { createContext } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({children}) => {

    return (
        <QuestionContext.Provider>
            {children}
        </QuestionContext.Provider>
    )
}

export {QuestionProvider};
export default QuestionContext;