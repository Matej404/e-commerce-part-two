import React from "react";
import { Form ,Formik } from "formik";
import "../Register/Register.css";
import * as Yup from "yup";
import TextFieldComp from "../../components/TextField/TextField";
import ButtonComp from "../../components/Button/ButtonComp";

const Login = () => {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email address is required"),

          password: Yup.string()
            .required("Password is required")
    })

    return(
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik
                      initialValues={{email: '', password: ''}}
                      validationSchema={loginSchema}
                      validateOnBlur
                    >
                      <Form className="baseForm">
                        <header className="baseFormHeader">
                            <h1 className="baseFormHeading">Log in</h1>
                        </header>
                        <TextFieldComp 
                          label="Email"
                          name="email"
                          id="email-input"
                        />
                        <TextFieldComp
                          label="Password"
                          name="password"
                          id="password-input" 
                        />
                        <ButtonComp variation="contained" color="primary" type="submit">Submit</ButtonComp>
                        <p>Forgoten your password?</p>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <p>Sign in with</p>
                        </div>
                        <div className="social-btn-container">
                            <ButtonComp variant="contained" className="facebook-btn" >Facebook</ButtonComp>
                            <ButtonComp variant="contained" className="google-btn" >Google</ButtonComp>
                        </div>
                      </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
};

export default Login;