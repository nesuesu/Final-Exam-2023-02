
import { Link } from "react-router-dom";

import { useContext } from "react";
import UserContext from "./contexts/UserContext";

const Header = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Signup</Link>
        <Link to={'/questions'}>Questions</Link>
        <Link to={'/answers'}>Answers</Link>
        <Link to={'/addquestion'}>Add question</Link>
        <Link to={'/addanswer'}>Add Answer</Link>
        <h1>Logged in: {loggedInUser && loggedInUser.username}</h1>
        </>
    );
}

export default Header;