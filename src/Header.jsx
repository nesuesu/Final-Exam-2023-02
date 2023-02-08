
import logo from './images/logo.png'

import { Link } from "react-router-dom";

import { useContext } from "react";
import UserContext from "./contexts/UserContext";

const Header = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <>
        <header>

        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='menu'>
            <Link to={'/questions'}>Questions</Link>
            <Link to={'/addquestion'}>Add question</Link>
            <Link to={'/answers'}>Answers</Link>
            <Link to={'/addanswer'}>Add Answer</Link>
        </div>
        
        <div className='login'>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Signup</Link>
        </div>

        </header>

        <h1>Logged in: {loggedInUser && loggedInUser.username}</h1>
        </>
    );
}

export default Header;