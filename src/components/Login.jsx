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
                sessionStorage.setItem('loggedInUser', values.username); 
                navigateTo('/questions');
            } else {
                alert('Wrong username or password')
                actions.resetForm();
            }
          },
    });

    return (
        <>
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
                <span className="error">{formik.errors.username}</span>) 
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
                <span className="error">{formik.errors.password}</span>) 
                : 
                null}
            
            <input type="submit" value="Log in" />
        </form>
        </>
    );
}

export default Login;