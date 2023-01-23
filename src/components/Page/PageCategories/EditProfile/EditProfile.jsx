import React, {useEffect, useState} from 'react'
import s from './EditProfile.module.css'
import {AiFillEdit, GrUserWorker} from "react-icons/all";
import {connect} from "react-redux";
import {saveChangesProfile, savePhoto, userProfile} from "../../../redux/profile-reducer";
import userphoto from '../../../../assets/userphoto.png'
import Preloader from "../../../common/Preloader";
import {Field, Formik} from "formik";
import {Checkbox} from "@mui/material";

const EditProfile = ({profile, userProfile, savePhoto, saveChangesProfile}) => {
    const id = 26582
    const [editAbout, setEditAbout] = useState(false)
    const [editJob, setEditJob] = useState(false);
    const [editSocial, setEditSocial] = useState(false);

    const onSelectPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const ContactsEdit = ({value, name, handleChange, placeholder}) => {
        return <Field type="text"
                      className={s.edit_input}
                      name={"contacts." + name}
                      placeholder={"Your " + placeholder}
                      value={value}
                      onChange={handleChange}
        />
    }

    useEffect(() => {
        userProfile(id)
    }, []);

    if (!profile) {
        return <Preloader/>
    }
    return <Formik initialValues={
        {
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            },
            fullName:profile.fullName
        }
    }
                   onSubmit={(values) => {
                       saveChangesProfile(values)
                       setEditAbout(false)
                       setEditJob(false)
                       setEditSocial(false)
                   }}>

        {({values, handleChange, handleSubmit}) => (
            <div className={s.container}>
                <div className={s.change_avatar_container}>
                    <div className={s.header}>
                <span className={s.header_title}>
                    Avatar
                </span>
                        <label className={s.header_edit}>
                            <input onChange={onSelectPhoto} style={{display: 'none'}} type='file'/>
                            <AiFillEdit />
                            <span>Edit</span>
                        </label>
                    </div>
                    <img alt='avatar' className={s.avatar_img}
                         src={profile.photos ? profile.photos.large : userphoto}/>
                </div>
                <div className={s.change_about_container}>
                    <div className={s.header}>
                <span className={s.header_title}>
                    About Me
                </span>
                        <CategoryButton editCategory={editAbout} setEditCategory={setEditAbout} handleSubmit={handleSubmit}/>
                    </div>
                    <div className={s.info_text}>
                        {editAbout
                            ? <Field name='aboutMe' className={s.edit_input} onChange={handleChange} value={values.aboutMe} type='text'/>
                            : profile.aboutMe || <span>Write something about You</span>}
                    </div>
                </div>
                <div className={s.change_job_container}>
                    <div className={s.header}>
                <span className={s.header_title}>
                Job
                </span>
                        <CategoryButton editCategory={editJob} setEditCategory={setEditJob} handleSubmit={handleSubmit}/>
                    </div>
                    <div className={s.info_text}>
                        <GrUserWorker size={20}/>
                        <span>Is Looking a Job - {editJob
                            ? <Checkbox name='lookingForAJob' onChange={handleChange} checked={values.lookingForAJob} />
                            : profile.lookingForAJob ? 'Yes' : 'No'}
                </span>
                    </div>
                    <div className={s.info_text}>My skills
                        - {editJob
                            ? <Field  className={s.edit_input} name='lookingForAJobDescription' onChange={handleChange} value={values.lookingForAJobDescription} type='text'/>
                            : profile.lookingForAJobDescription || 'No yet'}
                    </div>
                </div>
                <div className={s.change_social_container}>
                    <div className={s.header}>
                    <span className={s.header_title}>
                    Social Networks
                    </span>
                        <CategoryButton editCategory={editSocial} setEditCategory={setEditSocial} handleSubmit={handleSubmit}/>
                    </div>
                    <div className={s.info_text}>
                        {Object.keys(profile.contacts).map((title) => (
                            <div>{title} - {editSocial
                                ? <ContactsEdit placeholder={title} handleChange={handleChange} key={title}
                                                value={values.contacts[title]} name={title}/>
                                : profile.contacts[title]
                                    ? <a target="_blank" rel="noopener noreferrer"
                                         href={profile.contacts[title]}>{profile.contacts[title]}</a>
                                    : <span style={{color: '#0056fe'}}>
                                         No yet
                                      </span>}
                            </div>))}
                    </div>
                </div>
            </div>
        )}
    </Formik>
}

const CategoryButton = ({editCategory, setEditCategory,handleSubmit}) => {
  return <div>
      {editCategory ? <button className={s.save_changes} type='submit' onClick={handleSubmit}>Save Changes</button>
          : <span onClick={() => setEditCategory(true)} className={s.header_edit}>
                <AiFillEdit />
                <span >Edit</span>
                </span>}
  </div>
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {userProfile, savePhoto, saveChangesProfile})(EditProfile)
