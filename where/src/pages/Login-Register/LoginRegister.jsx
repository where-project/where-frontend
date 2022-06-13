import React, { useState } from 'react'
import Login from './Login/Login';
import Register from './Register/Register';
import "../../css/login_register.css";

const LoginRegister = ({ setIsLogin, ...props }) => {
    const [validPage, setValidPage] = useState('Login');
    return (
        <div>
            {validPage === 'Login' ? <Login setValidPage={setValidPage} setIsLogin={setIsLogin} /> : <Register setValidPage={setValidPage} />}
        </div>
    )
}

export default LoginRegister;