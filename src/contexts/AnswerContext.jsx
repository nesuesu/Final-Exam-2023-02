
import { createContext } from "react";

const AnswerContext = createContext();

const AnswerProvider = ({children}) => {

    return (
        <AnswerContext.Provider>
            {children}
        </AnswerContext.Provider>
    )
}

export {AnswerProvider};
export default AnswerContext;