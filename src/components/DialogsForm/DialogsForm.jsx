import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import s from "../../pages/Dialogs/Dialogs.module.css";
import React from "react";
import {BiRightArrowAlt, MdKeyboardVoice} from "react-icons/all";

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
            resetForm({values:''},
            )
        }}
        validationSchema={validationSchema}
    >
        {({values, errors, handleChange,handleSubmit})=>(
            <Form >
                <div className={s.send_message}>
                    <div className={s.voice}><MdKeyboardVoice size={20} /></div>
                    <Field type="text"
                           className={s.input}
                           name="message"
                           placeholder="Write your message..."
                           value={values.message}
                           onChange={handleChange} />
                        {values.message && <div type={'submit'} onClick={handleSubmit} className={s.send}>
                            <BiRightArrowAlt size={25}/>
                        </div>}
                    {errors.message && <p className={s.errors}>
                        {errors.message}
                    </p>}
                </div>
            </Form>
        )}


    </Formik>
}

export default DialogsForm;