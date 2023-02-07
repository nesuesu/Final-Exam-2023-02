import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";

const Login = () => {

    const { users, setLoggedInUser } = useContext(UserContext);

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const [username,password] = [e.target.username.value, e.target.password.value];

        const founduser = users.find(user => (user.username === username) && (user.password === password));
        if (founduser) {
            setLoggedInUser(founduser);
            navigateTo('/questions');
        } else {
            alert('username or password is incorrect');
        }

    }

    return (
        <>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username: 
                <input type="text" name="username" />
            </label>
            <label htmlFor="">Password: 
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Log in" />
        </form>
        </>
    );
}

export default Login;
<h1>Login</h1>