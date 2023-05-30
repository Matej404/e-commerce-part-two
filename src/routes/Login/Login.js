import React, { useState } from "react";
import { Form ,Formik } from "formik";
import "../Register/Register.css";
import * as Yup from "yup";
import TextFieldComp from "../../components/TextField/TextField";
import ButtonComp from "../../components/Button/ButtonComp";
import Orders from "../Orders/Orders";
import { useDispatch, useSelector } from "react-redux"; 
import { loginUser } from "../../store/auth/Auth.actions";

const Login = () => {
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async(credentials) => {
        try {
            setIsLoading(true)
            await dispatch(loginUser(credentials))
            setIsLoading(false)
        } catch(err) {
            setIsLoading(false)
        }
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email address is required"),

          password: Yup.string()
            .required("Password is required")
    })

    return(
        <div>
        {!isAuthenticated &&
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik
                      initialValues={{email: '', password: ''}}
                      validationSchema={loginSchema}
                      validateOnBlur
                      onSubmit={async(value) => {
                        const { email, password } = value;
                        await handleLogin({ username: email, password })
                      }}
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
                        {
                            error && <div>{error}</div>
                        }
                        <ButtonComp variant="contained" color="primary" type="submit" isLoading={isLoading}>Submit</ButtonComp>
                        <p>Forgoten your password?</p>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <p>Sign in with</p>
                        </div>
                        <div className="social-btn-container">
                            <ButtonComp variant="contained" className="facebook-btn" href="/http://localhost:4000/auth/facebook">Facebook</ButtonComp>
                            <ButtonComp variant="contained" className="google-btn" href="/http://localhost:4000/auth/google">Google</ButtonComp>
                        </div>
                      </Form>
                    </Formik>
                </div>
            </div>
        </div>
        }
        {isAuthenticated && 
            <Orders />
        }
        </div>
    )
};

export default Login;