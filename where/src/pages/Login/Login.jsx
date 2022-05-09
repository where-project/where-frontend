import React, { useEffect, useState } from 'react'
import LoginService from '../../services/LoginService';
import "../../css/login.css";
import "../../css/icon.css";
import "../../css/responsive.css";
import LocalStorageService from '../../services/LocalStorageService';
import CategoryService from '../../services/CategoryService';
const Login = () => {

    const login = (event) => {
        event.preventDefault();
        let loginService = new LoginService();
        let categoryService = new CategoryService();
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
        categoryService.getAll().then((result) => {
            console.log(result)
        }, err => {
            console.log(err.response.data.error_message);
        });
                
    }

    return (
        <div id="loginsingup" className="loginsingup">
            <button type="button" className="btnclose">x</button>
            <img className="loginsingupimg" style={{ position: "50% 50%" }}  src={require("/public/Screenshot_1.png")} alt="Merhabaa" />
            <div className="login-contentarea">
                <div className="themetabs">
                    <ul className="tabnavloginregistered">
                        <li role="presentation" className="active"><a href="#listar-loging" data-toggle="tab">Log in</a></li>
                        <li role="presentation"><a href="#listar-register" data-toggle="tab">Register</a></li>
                    </ul>
                </div>
                <form className="formtheme formlogin" onSubmit={login}>
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