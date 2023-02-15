import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import { useFormik } from 'formik';



const Login = () => {

    const { users, loggedInUser, setLoggedInUser } = useContext(UserContext);

    const navigateTo = useNavigate();

    const validationSchema = Yup.object({
        username: Yup
            .string('Must be a string')
            .required('Username is required'),
        password: Yup
            .string('Must be a string')
            .required('Password is required')
            .min(3, 'Please enter at least 3 symbols'),
      });
    
      const formik = useFormik({
        initialValues: {
            username:'',
            password: '',
        },
        validationSchema,
        onSubmit: (values,actions) => {
            const logged = users.find(user => (user.username === values.username) && (user.password === values.password));
            if (logged) {   
                setLoggedInUser(logged);
                sessionStorage.setItem('loggedInUser', JSON.stringify(logged)); 
                navigateTo('/questions');
            } else {
                alert('Wrong username or password')
                actions.resetForm();
            }
          },
    });

    return (
        <>
        <div className="forma">
            <h1>Log in</h1>
            <form onSubmit={formik.handleSubmit}>

                <label>Username: 
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter your username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </label>
                {formik.touched.username && formik.errors.username ? (
                    <p className="error">{formik.errors.username}</p>) 
                    : 
                    null}

                <label>Password: 
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </label>
                {formik.touched.password && formik.errors.password ? (
                    <p className="error">{formik.errors.password}</p>) 
                    : 
                    null}
                
                {/* <input type="submit" value="Log In"/>  */}
                <button type="submit">Log In</button>
            </form>
        </div>
        
        </>
    );
}

export default Login;