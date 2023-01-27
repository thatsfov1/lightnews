import classes from "./Login.module.css"
import React from "react"
import { Formik } from "formik"
import * as yup from 'yup'
import { Navigate, NavLink } from "react-router-dom"
import { login } from "../redux/auth-reducer"
import { connect } from "react-redux"

const Login = ({isAuth,login,captchaUrl}) =>{
    
 if(isAuth) return <Navigate to={'/'}/>
    return <div>
            <LoginForm login={login} captchaUrl={captchaUrl}/>
    </div>
}

const LoginForm = ({login,captchaUrl}) =>{
    const validationSchema = yup.object().shape({
        email:yup.string().email('Incorrect Email').required('This field required'),
        password:yup.string().typeError('Must be string').required('This field required').min(8,'Password is too short'),
    })

    return <Formik
        initialValues={
            {
                email:'',
                password:'',
                rememberMe:false,
                captcha:''

            }
        }
        validateOnBlur
        onSubmit={(values,{setStatus,setSubmitting})=> {
            login(values.email, values.password, values.rememberMe, setStatus, values.captcha)
            setSubmitting(false);
        }} 
        validationSchema={validationSchema}

    >
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,dirty,isValid,status})=>(
                <div className={classes.form}>
                    <div className={classes.container}>
                        <div className={classes.body}>
                        <div className={classes.title}>Sign in </div>
                        <p className={classes.status}>{status}</p>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Email"
                                value={values.email}
                                className={classes.input}/>
                                
                                {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Password"
                                value={values.password}
                                className={classes.input}/>
                                {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>  }
                            </div>
                            <div className={classes.checkbox}>
                                <input onChange={handleChange} type="checkbox" name="rememberMe"/> Remember me
                            </div>
                            {captchaUrl && <div>
                                <img src={captchaUrl} alt=""/>
                                <label htmlFor="captcha">Captcha:</label>

                                <input type="captcha" name="captcha"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       placeholder="Symbols from captcha"
                                       value={values.captcha}
                                       className={classes.input}/>
                            </div>}
                            <div className={classes.forgotpassword}>
                                <NavLink to='/recoverpassword'>Forgot Password?</NavLink>
                            </div>
                            <button disabled={!isValid && !dirty} type={'submit'} onClick={handleSubmit} className={classes.button} >Sign in</button>
                            <div className={classes.signup}>
                                Don't have an account?
                                <NavLink to='/createprofile'>Sign up!</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            </Formik>

}

const mapStateToProps =(state)=>{
    return {
        isAuth:state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);