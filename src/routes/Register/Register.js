import React from "react";
import { Formik, Form } from "formik"; 

const Register = () => {
    
    return(
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik>
                        <Form className="baseForm">
                            <header className="baseFormHeader">
                                <h1 className="baseFormHeading">Register</h1>
                            </header>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Register;