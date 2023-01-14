import { Formik } from "formik";
import * as yup from 'yup';
import React from "react";
import classes from './CreateProfile.module.css'



const CreateProfile =()=>{
    return <>
    <CreateProfileForm/>
    </>
}



const CreateProfileForm =()=>{

    const validationsSchema = yup.object().shape({
        login: yup.string().typeError('Must be string').required('Required field').min(6,'Login is too short').max(16,'Login is too long'),
        email: yup.string().email('Incorrect Email').required('Required field'),
        password: yup.string().typeError('Must be string').required('Required field').min(8, 'Password is too short'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password is different').required('Required field'),

    })

    return <Formik
    initialValues={{
        login:'',
        email:'',
        password:'',
        confirmPassword:'',
    }}
    validateOnBlur
    onSubmit={(values)=> {}} // запрос на сервер
    validationSchema={validationsSchema}
    >
    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
        <div className={classes.form}>
            <div className={classes.container}>
                <div className={classes.body}>
                    <div className={classes.title}>Sign up</div>
                    <div>
                    <label htmlFor="login">Login:</label>
                        <input type={'text'} name={'login'} placeholder='Your Login'
                         className={classes.input} onChange={handleChange}
                          onBlur={handleBlur} value={values.login}/>
                        {touched.login && errors.login &&<p className={classes.error}>{errors.login}</p>}
                    </div>
                    <div>
                    <label htmlFor="email">Email:</label>
                        <input type={'email'} name={'email'} placeholder='Your Email'
                             className={classes.input} onChange={handleChange}
                              onBlur={handleBlur} value={values.email}/>
                            {touched.email && errors.email &&<p className={classes.error}>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                            <input type={'password'} name={'password'} placeholder='Your Password'
                             className={classes.input} onChange={handleChange}
                              onBlur={handleBlur} value={values.password}/>
                            {touched.password && errors.password &&<p className={classes.error}>{errors.password}</p>}
                    </div>
                    <div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type={'password'} name={'confirmPassword'} placeholder='Confirm Your Password'
                             className={classes.input} onChange={handleChange}
                              onBlur={handleBlur} value={values.confirmPassword}/>
                            {touched.confirmPassword && errors.confirmPassword &&<p className={classes.error}>{errors.confirmPassword}</p>}
                        </div>
                        <button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'} className={classes.button} >Sign up</button>
                        {/* <button type={'submit'} onClick={handleSubmit} className={classes.facebook_button}>Sign up with Facebook</button> */}
                </div>
            </div>
        </div>
    )}
    </Formik>
}


export default CreateProfile;