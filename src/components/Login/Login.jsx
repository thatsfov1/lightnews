import classes from "./Login.module.css"
import React from "react"

const Login = () =>{
    return <div className={classes.login}>
        <div className={classes.login_body}>
            <div className={classes.login_title}>SIGN IN </div>
            <LoginForm/>
        </div>
    </div>
}

const LoginForm = () =>{
    return <>
            <div className={classes.login_inputs}>
                <div>
                    <input type="text" placeholder="Your name"/>
                </div>
                <div>
                    <input type="text" placeholder="Your password" />
                </div>
            </div>
            <div className={classes.login_buttons}>
                <button>Sign in</button>
            </div>
            <div className={classes.login_a}>
            <a href="#">Forgot Password?</a>
                <a href="#">Sign up</a>
            </div>
            </>

}

export default Login;