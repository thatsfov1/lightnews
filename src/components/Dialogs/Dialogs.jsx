import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from 'yup'
import DialogsItem from "../DialogsItem/DialogsItem";
import classes from "./Dialogs.module.css";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsinfo = state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} avatar={d.avatar} message={d.message} />)

    return <div className={classes.abc}>
        <h1>Dialogs</h1>

        <div>{dialogsinfo}</div>
        <div className={classes.areamessages}>
            <DialogsForm sendMessage={props.sendMessage}/>
        </div>
    </div>
}


const DialogsForm =(props)=>{

    const validationSchema = yup.object().shape({
        message: yup.string().typeError('must be string')
    })
    return <Formik
    initialValues={
        {
            message:'',
    }
}
    validateOnBlur
    onSubmit={(values,{resetForm})=>{
        props.sendMessage(values.message)
        resetForm({values:''})
    }}
    validationSchema={validationSchema}
    >
        {({values, errors, handleChange,handleSubmit})=>(
            <Form className={classes.form}>
                    <div>
                        <Field as='textarea' type="text"
                        className={classes.input} 
                        name="message" 
                        placeholder="Write your message..."
                        value={values.message} 
                        onChange={handleChange} />
                        {values.message && <button className={classes.button} type={'submit'} onClick={handleSubmit} >Send</button>}
                        {errors.message && <p className={classes.errors}>{errors.message}</p>}
                    </div>
            </Form>
        )}


    </Formik>
}
export default Dialogs;