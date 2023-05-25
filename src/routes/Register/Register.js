import React, { useState } from "react";
import { Formik, Form } from "formik"; 
import "./Register.css";
import TextFieldComp from "../../components/TextField/TextField";
import ButtonComp from "../../components/Button/ButtonComp";
import Orders from "../Orders/Orders";
import "./Register.css";
import * as Yup from "yup";
import { registerUser } from "../../store/auth/Auth.actions";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (credentials) => {
        try {
            setIsLoading(true);
            await dispatch(registerUser(credentials));
            setIsLoading(false);
        } catch(err) {
            setIsLoading(false);
        }
    }

    const registrationSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid Email address")
          .required("Email address is required"),

        password: Yup.string()
          .required("Password is required"),

        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Password must match")
    })

    return(
        <div>
            {!isAuthenticated &&
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik
                      initialValues={{email: '', password: ''}}
                      validationSchema={registrationSchema}
                      validateOnBlur
                      onSubmit={async (data) => {
                        const { ...credentials } = data;
                        await handleRegister(credentials);
                      }}
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
                               label="Password"
                               name="password"
                               id="password-input"
                               type="password"
                              />
                        
                              {
                                error && <div>{error}</div>
                              }
                            <ButtonComp variant="contained" color="primary" type="submit" isLoading={isLoading}>Submit</ButtonComp>
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
        </div>}
        {isAuthenticated && 
        <Orders />}
        </div>
    )
}

export default Register;