
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";


const Users = () => {

    const {users, loggedInUser} = useContext(UserContext);

    const navigateTo = useNavigate();

    return (
        <>
        <div className='users'>        
            {users && loggedInUser ?
            (users.map( (user,index) => (
                    // { (user.id === loggedInUser.id) && `style={{backgroundColor:'red'}}` }
                    <div key={index}>
                        <img style={{height:'30px'}} src={user.avatar} alt="avatar" />
                        <span> username: {user.username} - password: {user.password}</span>
                        <hr />
                    </div>
                    )))
            :
            <h1 style={{color:'blue'}}>PLEASE LOGIN FOR USERS DATA</h1>
            }
        </div>
        </>
    );
}

export default Users;