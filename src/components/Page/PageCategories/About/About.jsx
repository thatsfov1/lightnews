import React from 'react'
import s from './About.module.css'
import {faker} from "@faker-js/faker";
import {FiExternalLink} from "react-icons/all";
import {connect} from "react-redux";
import userphoto from '../../../../assets/userphoto.png';
import CreatePost from "./CreatePost";
import {addPost} from "../../../redux/profile-reducer";
import SinglePost from "./SinglePost";

const About = ({profile,post,addPost}) => {

    const profilePhotos = [...Array(6)].map(() => faker.image.abstract())

    return (
        <div className={s.container}>
            <div className={s.short_info_container}>  {/*SHORT INFO*/}
                <div className={s.body_container}>
                    <span className={s.title}>About</span>
                    <div className={s.text}>
                        {faker.lorem.words(30)}
                    </div>
                </div>
                <div className={s.body_container}> {/*PHOTOS*/}
                    <span className={s.title + ' ' + s.title_see_all}>
                        <span>
                            Photos
                        </span>
                        <span style={{color:'#2074fc'}}>
                            See all
                        </span>
                    </span>
                    <div className={s.all_photos}>
                        {
                            profilePhotos.map(p => <img alt='single' className={s.single_photo} src={p}/>)
                        }
                    </div>
                    <div className={s.photos_button}>
                        <FiExternalLink/>
                        <span style={{fontSize:'14px', fontWeight:500}}>More</span>
                    </div>
                </div>
                <div className={s.body_container}>  {/* FRIENDS LIST */}
                    <span className={s.title + ' ' + s.title_see_all}>
                        <span>
                            Friends
                            <div style={{color:'gainsboro'}}>
                        Friends:{faker.datatype.number(1000)}
                    </div>
                        </span>
                        <span style={{color:'#2074fc'}}>
                            See all
                        </span>
                    </span>
                    <div className={s.all_friends}>
                        {
                            [...Array(9)].map(() => <div className={s.single_friend}>
                                    <img alt='user' src={userphoto}/>
                                    <span style={{fontSize:'14px',fontWeight:500}}>{faker.name.fullName()}</span>
                            </div>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className={s.posts_container}> {/* ALL POSTS + CREATE POST CONTAINER */}
                <CreatePost addPost={addPost} profile={profile}/>
                <SinglePost profileImage={profile.photos.small || userphoto} post={post} profile={profile}/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
  return{
      post:state.profilePage.post,
      profile:state.profilePage.profile

  }
}



export default connect(mapStateToProps,{addPost})(About)
