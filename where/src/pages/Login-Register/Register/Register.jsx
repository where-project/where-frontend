import React, { useState } from 'react'
import leftImage from '../../../images/login.png'
import "../../../css/icon.css";
import "../../../css/responsive.css";
import "../../../css/style.css";
import "../../../css/login_register.css";
import LoginService from '../../../services/LoginService';

import { Alert, Form } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import WhereAlert from '../../../components/WhereAlert/WhereAlert';

const schema = yup.object().shape({
  username: yup.string().min(6, "must be at least 6 characters long").required("Please provide a valid title."),
  firstName: yup.string().min(3, "must be at least 3 characters long").required("Please provide a valid description."),
  lastName: yup.string().min(2, "must be at least 2 characters long").required("Please provide a valid description."),
  email: yup.string().email("Please provide a valid email.").required("This field is required"),
  password: yup.string().min(8, "must be at least 8 characters long").required("This field is required"),
  changepassword: yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

const Register = (props) => {
  const [error, setError] = useState('');
  let errorWhereAlert = '';
  if (error !== '') {
    errorWhereAlert = <WhereAlert variant="danger" message="Error" description={error} />
  }
  return (
    <div className="loginsingup">
      <img className="loginsingupimg" style={{ position: "50% 50%" }} src={leftImage} alt="Merhabaa" />
      <div className="login-contentarea">
        <div className="themetabs">
          <ul className="tabnavloginregistered">
            <button onClick={() => props.setValidPage('Login')}>Login</button>
            <button style={{ color: "#6fbf17" }} onClick={() => props.setValidPage('Register')} >Create Account</button>
          </ul>
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            const userInformation = {
              username: values.username,
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
              createUserRoleRequest: [
                {
                  "id": 1
                }
              ],
            }
            let loginService = new LoginService();
            loginService.register(userInformation).then((result) => {
              console.log(result)
            })
              .catch(err => {
                setError(err.response.data.error);
              });
          }}
          initialValues={{
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            changepassword: '',
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
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
                  <i className="icon-icons208"></i>
                  <input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={handleChange} />
                  {touched.firstName && errors.firstName ? (
                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                      {errors.firstName}
                    </Alert>
                  ) : null}
                </div>
                <div className="form-group inputwithicon">
                  <i className="icon-icons208"></i>
                  <input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={handleChange} />
                  {touched.lastName && errors.lastName ? (
                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                      {errors.lastName}
                    </Alert>
                  ) : null}
                </div>
                <div className="form-group inputwithicon">
                  <i className="icon-icons208"></i>
                  <input type="email" name="email" className="form-control text-transform_none" placeholder="Email Address" onChange={handleChange} />
                  {touched.email && errors.email ? (
                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                      {errors.email}
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
                <div className="form-group inputwithicon">
                  <i className="icon-lock-stripes"></i>
                  <input type="password" name="changepassword" className="form-control" placeholder="Confirm Password" onChange={handleChange} />
                  {touched.changepassword && errors.changepassword ? (
                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                      {errors.changepassword}
                    </Alert>
                  ) : null}
                </div>
                <div className="form-group">
                {error !== '' && errorWhereAlert}
                </div>
                <button type='submit' className="login-btn btngreen">Register</button>
              </fieldset>
            </Form>
          )}
        </Formik>
        
      </div>
    </div>
  )
}

export default Register;
