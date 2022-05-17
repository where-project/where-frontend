import React, { useEffect, useState } from 'react'
import "../../../css/login_register.css"
import "../../../css/icon.css";
import "../../../css/responsive.css";
import leftImage from '../../../images/login.png'
import LocalStorageService from '../../../services/LocalStorageService';
import LoginService from '../../../services/LoginService';
const Login = (props) => {

    const handleClick = (event) => {
        event.preventDefault();
        let loginService = new LoginService();
        let localStorageService = new LocalStorageService();
        loginService
            .login("onurakkepenek", "123")
            .then((result) => {
                localStorageService.setLocalStorage('accessToken', result.data.access_token);
                localStorageService.setLocalStorage('refreshToken', result.data.refresh_token);
            },
                err => {
                    console.log(err.response)
                });
    }

    return (
        <div id="loginsingup" className="loginsingup">
            <button type="button" className="btnclose">x</button>
            <img className="loginsingupimg" style={{ position: "50% 50%" }} src={leftImage} alt="Merhabaa" />
            <div className="login-contentarea">
                <div className="themetabs">
                    <ul className="tabnavloginregistered">
                        <button style={{ color: "#6fbf17" }} role="presentation" onClick={() => props.setValidPage('Login')}>Login</button>
                        <button role="presentation" onClick={() => props.setValidPage('Register')} >Create Account</button>
                    </ul>
                </div>
                <form className="formtheme formlogin" onSubmit={handleClick}>
                    <fieldset>
                        <div className="form-group inputwithicon">
                            <i className="icon-profile-male"></i>
                            <input type="text" name="username" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group inputwithicon">
                            <i className="icon-lock-stripes"></i>
                            <input type="password" name="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <input type="checkbox" name="remember" id="rememberpass2" />
                                <label htmlFor="rememberpass2">Remember me</label>
                            </div>
                            <span><a href="#1">Lost your Password?</a></span>
                        </div>
                        <button type='submit' className="login-btn btngreen">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>

    )
}

export default Login;