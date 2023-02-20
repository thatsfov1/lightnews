import React from 'react'
import s from './Info.module.css'
import {connect} from "react-redux";

const Info = ({profile}) => {
  return (
    <div className={s.container}>
            <div className={s.title}>
                Info
            </div>
            <div className={s.info_container}>
                <div>
                    <div className={s.contacts_main_title}>
                        About me
                    </div>
                    <div className={s.info_box}>
                        <div className={s.contacts_title}>
                            {profile.aboutMe || 'No info yet'}
                        </div>
                    </div>
                </div>
                <div>
                    <span className={s.contacts_main_title}>
                    Websites and social networks
                </span>
                    <div className={s.info_box}>
                        {Object.keys(profile.contacts).map((title) => (
                            <div key={title} className={s.contacts_title}>{title} - {profile.contacts[title] ?
                                <a target="_blank" rel="noopener noreferrer" href={profile.contacts[title]}>
                                    {profile.contacts[title]}
                                </a> : "No yet" } </div>))
                        }
                    </div>
            </div>
                <div>
                    <span className={s.contacts_main_title}>
                        Job
                    </span>
                    <div className={s.info_box}>
                        <div className={s.contacts_title}>
                            Is looking for  a job - {profile.lookingForAJob ? 'Yes' : 'No'}
                        </div>
                        {profile.lookingForAJob && <div className={s.contacts_title}>
                            My skills - {profile.lookingForAJobDescription}
                        </div>}
                    </div>
                </div>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
      profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, null)(Info)
