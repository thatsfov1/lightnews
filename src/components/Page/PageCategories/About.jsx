import React from 'react'
import s from './About.module.css'
import {faker} from "@faker-js/faker";
import {AiOutlineEdit} from "react-icons/all";
import {connect} from "react-redux";
import userphoto from '../../../assets/userphoto.png';

const About = ({profile}) => {
    return (
        <div className={s.container}>
            <div className={s.short_info_container}>
                <div className={s.body_container}>
                    <span className={s.title}>About</span>
                    <div className={s.text}>
                        {faker.lorem.words(30)}
                    </div>
                </div>
                <div className={s.body_container}>
                    <span className={s.title}>Photos</span>
                </div>
                <div className={s.body_container}>
                    <span className={s.title}>Friends</span>
                </div>
            </div>
            <div className={s.posts_container}>
                <div className={s.body_container}>
                    <span className={s.create_post_title}>
                        <span className={s.create_post_title_icon}>
                            <AiOutlineEdit color='#2074fc' size={15}/>
                        </span>
                        <span className={s.create_post_title_text}>
                            Create Post
                        </span>
                    </span>
                    <div className={s.input_container}>
                        <input placeholder="What's on your mind?" className={s.input}/>
                        <img className={s.input_avatar} src={profile.photos.small || userphoto}/>
                    </div>
                </div>
                <div className={s.body_container}>
                    post
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
  return{
      profile:state.profilePage.profile
  }
}



export default connect(mapStateToProps,null)(About)
