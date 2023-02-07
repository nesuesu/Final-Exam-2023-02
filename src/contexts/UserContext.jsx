import { createContext } from "react";
import { useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const url = 'http://localhost:5000/users';

    const [users, setUsers] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [loggedInUser, setLoggedInUser] = useState(null);

    // STATE FUNCTIONS

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    }

    // CRUD FUNCTIONS

    const postUser = (newUser) => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json());
    }

    // ant pirmo užkrovimo atsisiunčiam visus vartotojus iš json serverio ir įsirašom juos į state kintamąjį
    const getUsers = async () => {
        const data = await fetch(url)
            .then(res => res.json());
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                isLoggedIn,
                setIsLoggedIn,
                loggedInUser, 
                setLoggedInUser,
                addUser,
                postUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;