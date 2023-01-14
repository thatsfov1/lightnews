import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import s from "./Dialogs.module.css";
import React from "react";

const DialogsForm =({sendMessage})=>{

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
            sendMessage(values.message)
            resetForm({values:''})
        }}
        validationSchema={validationSchema}
    >
        {({values, errors, handleChange,handleSubmit})=>(
            <Form className={s.form}>
                <div>
                    <Field as='textarea' type="text"
                           className={s.input}
                           name="message"
                           placeholder="Write your message..."
                           value={values.message}
                           onChange={handleChange} />
                    {values.message && <button className={s.button} type={'submit'} onClick={handleSubmit} >Send</button>}
                    {errors.message && <p className={s.errors}>{errors.message}</p>}
                </div>
            </Form>
        )}


    </Formik>
}

export default DialogsForm;