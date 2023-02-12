import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./contexts/UserContext";

const UserInfo = () => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext); 

    const navigateTo = useNavigate();

    const logOut = () => {
        setLoggedInUser(null);
        sessionStorage.clear();
        navigateTo('/questions');
    }

    return (
        <div className="userinfo">
            <img style={{height:'50px'}} src={loggedInUser.avatar} alt="avatar" />
            <p>{loggedInUser.username}</p>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default UserInfo;