
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
                        <span> - {user.username} - {user.email}</span>
                        <hr />
                    </div>
                    )))
            :
            (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
            }
        </div>
        </>
    );
}

export default Users;