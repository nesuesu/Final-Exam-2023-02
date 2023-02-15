import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import {useFormik} from 'formik';

const Register = () => {

    const { users, setUsers, postUser, setLoggedInUser } = useContext(UserContext);

    const navigateTo = useNavigate();

    const validationSchema = Yup.object({
        username: Yup
            .string('Must be a string')
            .required('Username is required'),
        password: Yup
            .string('Must be a string')
            .required('Password is required')
            .min(3, 'Please enter at least 3 symbols'),
        passwordRepeat: Yup
            .string('Must be a string')
            .required('Confirm password is required')
            .min(3, 'Please enter at least 3 symbols')
            .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
        email: Yup
            .string('Must be a string')
            .required('Email is required')
            .email('Please enter a valid email address'),
        avatar: Yup
            .string('Must be a string')
            .url('Please enter valid url'),
    });

    const formik = useFormik({
        initialValues: {
            username:'',
            password: '',
            passwordRepeat: '',
            email: '',
            avatar:'',
            id:Date.now(),
        },
        validationSchema,
        validateOnChange:true,
        validateOnBlur:true,
        onSubmit: (values,actions) => {
            const {passwordRepeat, ...rest} = values;
            const data = rest;
            if (users.findIndex(user => user.username === values.username) === -1) {
                setUsers([...users, data]);
                postUser(data); // !!!!!!!!!!!!!!!!!!!!
                setLoggedInUser(data);
                sessionStorage.setItem('loggedInUser', JSON.stringify(data)); 
                navigateTo('/questions');
            } else {
                alert('The username you have entered exists');
            }

          },
    });

        return (
            <>
            <div className="forma">
                <h1>Sign up</h1>
                <form onSubmit={formik.handleSubmit}>
                    <label >Username:
                        <input 
                            type="text" 
                            name="username"
                            id="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        />
                    </label>
                    {formik.touched.username && formik.errors.username ? (
                        <p className="error">{formik.errors.username}</p>) 
                        : 
                        null}

                    <label >Password:
                        <input 
                            type="password" 
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.password && formik.errors.password ? (
                        <p className="error">{formik.errors.password}</p>) 
                        : 
                        null}

                    <label >Confirm password:
                        <input 
                            type="password" 
                            name="passwordRepeat"
                            id="passwordRepeat"
                            value={formik.values.passwordRepeat}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
                        <p className="error">{formik.errors.passwordRepeat}</p>) 
                        : 
                        null}

                    <label >Email:
                        <input 
                            type="text" 
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.email && formik.errors.email ? (
                        <p className="error">{formik.errors.email}</p>) 
                        : 
                        null}

                    <label >Avatar:
                        <input 
                            type="text" 
                            name="avatar"
                            id="avatar"
                            value={formik.values.avatar}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.avatar && formik.errors.avatar ? (
                        <p className="error">{formik.errors.avatar}</p>) 
                        : 
                        null}


                    {/* <input type="submit" value="Sign Up" /> */}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            </>
        );
    }

export default Register;