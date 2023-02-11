
import logo from './images/logo.png'

import { Link } from "react-router-dom";

import { useContext } from "react";
import UserContext from "./contexts/UserContext";

import UserInfo from './UserInfo';

const Header = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <>
        <header>

        <div className='flex'>

            <div className='logo'>
                <Link to={'/questions'}><img src={logo} alt="logo" /></Link>
            </div>

            <div className='menu'>
                <Link to={'/questions'} style={{textDecoration:'none'}}>Questions</Link>
                {/* <Link to={'/addquestion'}>Add question</Link>
                <Link to={'/answers'}>Answers</Link>
                <Link to={'/addanswer'}>Add Answer</Link> */}
            </div>
            
            {loggedInUser ?
                <UserInfo/>
            :
            <div className='login'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Signup</Link>
            </div>
            }

        </div>

        </header>
        </>
    );
}

export default Header;