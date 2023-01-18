import React from 'react'
import s from './About.module.css'
import {faker} from "@faker-js/faker";
import {
    AiOutlineEdit,
    BiHeart,
    BiLike,
    FaRegComment,
    FiCamera,
    FiExternalLink,
    FiImage,
    FiShare2,
    FiVideo
} from "react-icons/all";
import {connect} from "react-redux";
import userphoto from '../../../../assets/userphoto.png';
import CreatePost from "./CreatePost";
import {addPost} from "../../../redux/profile-reducer";

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
                            profilePhotos.map(p => <img className={s.single_photo} src={p}/>)
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
                            [...Array(9)].map(() => <div  className={s.single_friend}>
                                    <img src={userphoto}/>
                                    <span style={{fontSize:'14px',fontWeight:500}}>{faker.name.fullName()}</span>
                            </div>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className={s.posts_container}> {/* ALL POSTS + CREATE POST CONTAINER */}
                <CreatePost addPost={addPost} profile={profile}/>
                <div className={s.posts}> {/*ALL POSTS*/}
                    {post.map(p => (
                        <div className={s.body_container}>
                            <span className={s.by_container}>
                                <span className={s.by_avatar}>
                                    <img src={profile.photos.large || userphoto}/>
                                </span>
                                <div className={s.by_name}>
                                    <div className={s.by_name_nick}>{profile.fullName}</div>
                                    <div className={s.create_post_title_text}>{faker.datatype.number({min: 1, max: 16})} hours ago</div>
                                </div>
                            </span>
                            <div className={s.post_message}>
                                {p.message}
                            </div>
                            <div className={s.activity}>
                                <div className={s.activity_left}>
                                    <span className={s.activity_like}>
                                    <BiLike size={15} color='white'/>
                                </span>
                                    <span className={s.activity_heart}>
                                    <BiHeart size={15} color='white'/>
                                </span>
                                    {p.likes}K Likes
                                    <span>
                                    <FaRegComment size={20}/> {p.comments} Comments
                                </span>
                                </div>
                                <div className={s.activity_right}>
                                    <span>
                                        <FiShare2 size={20}/> Share
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
  return{
      profile:state.profilePage.profile,
      post:state.profilePage.post
  }
}



export default connect(mapStateToProps,{addPost})(About)
