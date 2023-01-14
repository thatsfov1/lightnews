import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import * as yup from "yup";
import {Field, Form, Formik} from "formik";

const ProfileInfoDataEditForm =({profile,saveChangesInfo,saveChangesProfile}) =>{

    const ContactsEdit =({contactTitle, value, values, name, handleChange,placeholder})=>{
        return <div>
            {contactTitle} : <Field  type="text"
                                     className={classes.contacts_input}
                                     name={"contacts." + name}
                                     placeholder={"Let people know your " + placeholder}
                                     value={value}
                                     onChange={handleChange}
                                      />
        </div>
    }

    const validationSchema = yup.object().shape({
        message: yup.string().typeError('must be string')
    })

    return <Formik initialValues={
        {
            aboutMe:profile.aboutMe,
            lookingForAJob:profile.lookingForAJob,
            lookingForAJobDescription:profile.lookingForAJobDescription,
            contacts:{
                facebook:profile.contacts.facebook,
                website:profile.contacts.website,
                vk:profile.contacts.vk,
                twitter:profile.contacts.twitter,
                instagram:profile.contacts.instagram,
                youtube:profile.contacts.youtube,
                github:profile.contacts.github,
                mainLink:profile.contacts.mainLink,
        },
            fullName:profile.fullName}
    }
    onSubmit={(values)=>{
        saveChangesProfile(values)
        saveChangesInfo()
}
}
validationSchema={validationSchema}
                   >
        {({values, errors, handleChange,handleSubmit})=>(

            <Form className={classes.form}>
                <div>
                    Nickname: <Field  type="text"
                                      className={classes.input}
                                      name="fullName"
                                      placeholder="Your new nickname"
                                      value={values.fullName}
                                      onChange={handleChange} />
                </div>
                <div className={classes.title}>Profile information:</div>
                <button type={'submit'} onClick={handleSubmit} className={classes.editbutton}>Save changes</button>


                <div  className={classes.data}>
                    <div className={classes.contacts}><div className={classes.contacts_title}>Contacts:</div> {Object.keys(profile.contacts).map(key =>{
                        return <ContactsEdit placeholder={key} handleChange={handleChange} key={key} contactTitle={key} value={values.contacts[key]} name={key}/>} )}
                    </div>
                    <div className={classes.about}>
                        <div>
                            About me: <Field  type="text"
                                              className={classes.input}
                                              name="aboutMe"
                                              placeholder="Write something about you..."
                                              value={values.aboutMe}
                                              onChange={handleChange} />
                        </div>
                        <div>
                            Looking for a job: <Field  type="checkbox"
                                                       name="lookingForAJob"
                                                       onChange={handleChange} />
                        </div>
                        {values.lookingForAJob &&
                            <div>
                                Professional skills: <Field  type="text"
                                                             className={classes.input}
                                                             name="lookingForAJobDescription"
                                                             placeholder="Write about your skills..."
                                                             value={values.lookingForAJobDescription}
                                                             onChange={handleChange} />
                            </div>}
                    </div>
                </div>
            </Form>
        )}
    </Formik>

}
export default ProfileInfoDataEditForm;