import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Register = () => {

    const { users, setUsers, setLoggedInUser } = useContext(UserContext);

    const navigateTo = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const [username, password, passwordRepeat] = [e.target.username.value, e.target.password.value, e.target.passwordRepeat.value];

        const founduser = users.find(user => (user.username === username));
        if (founduser) {
            alert('such username exists');
        } else if (password !== passwordRepeat) {
            alert('passwords must match');
        } else {
            const newUser = {
                username: username,
                password: password,
            }
            setUsers([...users, newUser]);
            setLoggedInUser(newUser);
            navigateTo('/questions');
        }
    }

        return (
            <>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Username:
                        <input type="text" name="username" />
                    </label>
                    <label htmlFor="">Password:
                        <input type="password" name="password" />
                    </label>
                    <label htmlFor="">Confirm password:
                        <input type="password" name="passwordRepeat" />
                    </label>
                    <input type="submit" value="Log in" />
                </form>
            </>
        );
    }

export default Register;