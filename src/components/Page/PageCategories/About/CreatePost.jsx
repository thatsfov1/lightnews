import React from 'react'
import s from "./About.module.css";
import {AiOutlineEdit, FiCamera, FiImage, FiVideo} from "react-icons/all";
import userphoto from "../../../../assets/userphoto.png";
import {Field, Form, Formik} from "formik";

const CreatePost = ({profile, addPost}) => {
    return (
        <Formik
            initialValues={
                {
                    post: ''
                }
            }
            onSubmit={(values, {resetForm}) => {
                addPost(values.post)
                resetForm({values: ''})
            }}
        >
            {({values, handleChange,handleSubmit}) => (
                <div className={s.body_container}>
                    <span className={s.create_post_title}>
                        <span className={s.create_post_title_icon}>
                            <AiOutlineEdit color='#2074fc' size={15}/>
                        </span>
                        <span className={s.create_post_title_text}>
                            Create Post
                        </span>
                    </span>
                    <Form className={s.input_container}>
                        <Field onChange={handleChange} type='text' name='post' value={values.post}
                               placeholder="What's on your mind?"
                               className={s.input}/>
                        <img alt={'user'} className={s.input_avatar} src={profile.photos.small || userphoto}/>
                    </Form>
                    <div className={s.create_post_tools}>
                        <span className={s.tool_container}>
                            <span className={s.tool_icon}>
                                <FiVideo color='#CC0000' size={25}/>
                            </span>
                            <span className={s.tool_text}>
                                Live Video
                            </span>
                        </span>
                        <span className={s.tool_container}>
                            <span className={s.tool_icon}>
                                <FiImage color='#14D876' size={25}/>
                            </span>
                            <span className={s.tool_text}>
                                Photo/Video
                            </span>
                        </span>
                        <span className={s.tool_container}>
                            <span className={s.tool_icon}>
                                <FiCamera color='#ff9331' size={25}/>
                            </span>
                            <span className={s.tool_text}>
                                Feeling/Activity
                            </span>
                        </span>
                        {values.post && <button
                            type={'submit'} onClick={handleSubmit} className={s.create_post_button}>
                            Create
                        </button>}
                    </div>
                </div>
            )}

        </Formik>
    )
}


export default CreatePost
