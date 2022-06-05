import React, { useEffect, useState } from 'react'
import "../../../css/login_register.css"
import "../../../css/icon.css";
import "../../../css/responsive.css";
import leftImage from '../../../images/login.png'
import LocalStorageService from '../../../services/LocalStorageService';
import LoginService from '../../../services/LoginService';

import { Alert, Form } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import WhereAlert from '../../../components/WhereAlert/WhereAlert';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    username: yup.string().required("Please provide a valid title."),
    password: yup.string().required("Please provide a valid description."),
});
const Login = (props) => {
    const [error, setError] = useState('');
    let errorWhereAlert = '';
    if (error !== '') {
        errorWhereAlert = <WhereAlert variant="danger" message="Error" description={error} />
    }
    return (
        <div id="loginsingup" className="loginsingup">
            <Link to="/mainpage">
                <button type="button" className="btnclose">
                    <a href='/mainpage' style={{ color: "white" }}>x</a></button>
            </Link>
            <img className="loginsingupimg" style={{ position: "50% 50%" }} src={leftImage} alt="Merhabaa" />
            <div className="login-contentarea">
                <div className="themetabs">
                    <ul className="tabnavloginregistered">
                        <button style={{ color: "#6fbf17" }} role="presentation" onClick={() => props.setValidPage('Login')}>Login</button>
                        <button role="presentation" onClick={() => props.setValidPage('Register')} >Create Account</button>
                    </ul>
                </div>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        setSubmitting(false);
                        let loginService = new LoginService();
                        let localStorageService = new LocalStorageService();
                        loginService
                            .login(values.username, values.password)
                            .then((result) => {
                                localStorageService.setLocalStorage('accessToken', result.data.access_token);
                                localStorageService.setLocalStorage('refreshToken', result.data.refresh_token);
                                window.location.href = '/mainpage';
                            },
                                err => {
                                    setError("Username or password is wrong");
                                });
                    }}
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        dirty,
                        isSubmitting,
                    }) => (
                        <Form className="formtheme formlogin" onSubmit={handleSubmit}>
                            <fieldset>
                                <div className="form-group inputwithicon">
                                    <i className="icon-profile-male"></i>
                                    <input type="text" name="username" className="form-control text-transform_none" placeholder="Username" onChange={handleChange} />
                                    {touched.username && errors.username ? (
                                        <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                            {errors.username}
                                        </Alert>
                                    ) : null}
                                </div>
                                <div className="form-group inputwithicon">
                                    <i className="icon-lock-stripes"></i>
                                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
                                    {touched.password && errors.password ? (
                                        <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                            {errors.password}
                                        </Alert>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <input type="checkbox" name="remember" id="rememberpass2" />
                                        <label htmlFor="rememberpass2">Remember me</label>
                                    </div>
                                    <span><a href="#1">Lost your Password?</a></span>
                                </div>
                                <div className="form-group">
                                    {error !== '' && errorWhereAlert}
                                </div>
                                <button type='submit' className="login-btn btngreen" disabled={isSubmitting}>Login</button>
                            </fieldset>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    )
}

export default Login;
