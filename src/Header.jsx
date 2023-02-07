import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Signup</Link>
        <Link to={'/questions'}>Questions</Link>
        <Link to={'/answers'}>Answers</Link>
        <Link to={'/addquestion'}>Add question</Link>
        <Link to={'/addanswer'}>Add Answer</Link>
        </>
    );
}

export default Header;