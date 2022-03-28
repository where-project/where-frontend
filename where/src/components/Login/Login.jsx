import React, { useEffect, useState } from 'react'
import LoginService from '../../service/LoginService';
const Login = () => {
    const [data, setData] = useState();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let loginService = new LoginService();
        loginService
            .login("Onur", "123")
            .then((result) => setData(result));
    }, [flag]);

    return (
        <div>
            <form action="action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button type="submit" onClick={setFlag(true)}>Login</button>
            </form>
        </div>
    )
}

export default Login;