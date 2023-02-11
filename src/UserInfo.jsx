import { useContext } from "react";
import UserContext from "./contexts/UserContext";

const UserInfo = () => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext); 

    const logOut = () => {
        setLoggedInUser(null);
        sessionStorage.clear();
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