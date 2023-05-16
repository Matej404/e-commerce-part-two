import React from "react";
import { Formik, Form } from "formik"; 
import "./Register.css";
import TextFieldComp from "../../components/TextField/TextField";
import ButtonComp from "../../components/Button/ButtonComp";
import "./Register.css";
import * as Yup from "yup";

const Register = () => {
    const registrationSchema = Yup.object().shape({
        email: Yup.string
          .email("Invalid Email address")
          .required("Email address is required"),

        password: Yup.string()
          .required("Password is required"),

        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Password must match")
    })

    return(
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik
                      initialValues={{email: '', password: ''}}
                      validationSchema={registrationSchema}
                      validateOnBlur
                    >
                        <Form className="baseForm">
                            <header className="baseFormHeader">
                                <h1 className="baseFormHeading">Register</h1>
                            </header>
                            <TextFieldComp
                                label="Email"
                                name="email"
                                id="email-input"
                              />
                             <TextFieldComp
                                label="Confirm Password"
                                name="confirmPassword"
                                id="confirm-password-input"
                                type="password"
                              />
                            <ButtonComp variant="contained" color="primary" type="submit">Submit</ButtonComp>
                            <hr></hr>
                            <div style={{white: "100%", display: "flex", justifyContent: "center"}}>
                                <p>Register white</p>
                            </div>
                            <div className="social-btn-container">
                                <ButtonComp variant="contained" className="facebook-btn">Facebook</ButtonComp>
                                <ButtonComp variant="contained" className="google-btn">Google</ButtonComp>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Register;