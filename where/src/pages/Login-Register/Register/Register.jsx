import React from 'react'
import leftImage from '../../../images/login.png'
import "../../../css/icon.css";
import "../../../css/responsive.css";
import "../../../css/style.css";
import "../../../css/login_register.css";
import LoginService from '../../../services/LoginService';

const Register = (props) => {

  const handleClick = (event) => {
    event.preventDefault();
    let loginService = LoginService();
    loginService.register("USERNESNESİOLUSTURULMALIDIR").then((result) => {
      console.log(result)
    },
      err => {
        console.log(err.response)
      }
    );
  }

  return (
    <div className="loginsingup">
      <button type="button" className="btnclose">x</button>
      <img className="loginsingupimg" style={{ position: "50% 50%" }} src={leftImage} alt="Merhabaa" />
      <div className="login-contentarea">
        <div className="themetabs">
          <ul className="tabnavloginregistered">
            <button onClick={() => props.setValidPage('Login')}>Login</button>
            <button style={{ color: "#6fbf17" }} onClick={() => props.setValidPage('Register')} >Create Account</button>
          </ul>
        </div>
        <form className="formtheme formlogin" onSubmit={handleClick}>
          <fieldset>
            <div className="form-group inputwithicon">
              <i className="icon-profile-male"></i>
              <input type="text" name="username" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group inputwithicon">
              <i className="icon-icons208"></i>
              <input type="email" name="emailaddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group inputwithicon">
              <i className="icon-user3"></i>
              <input type="text" name="username" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group inputwithicon">
              <i className="icon-lock-stripes"></i>
              <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group inputwithicon">
              <i className="icon-lock-stripes"></i>
              <input type="password" name="confirmpassword" className="form-control" placeholder="Password" />
            </div>
            <button type='submit' className="login-btn btngreen">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Register;