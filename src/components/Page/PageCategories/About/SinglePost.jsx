import React from 'react'
import s from "./About.module.css";
import userphoto from "../../../../assets/userphoto.png";
import {faker} from "@faker-js/faker";
import {BiHeart, BiLike, FaRegComment, FiShare2} from "react-icons/all";

const SinglePost = ({post,profile}) => {
  return (
    <div>
        <div className={s.posts}>
            {post.map(p => (
                <div className={s.body_container}>
                            <span className={s.by_container}>
                                <span className={s.by_avatar}>
                                    <img src={profile.photos ? profile.photos.large : profile.avatar}/>
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
  )
}

export default SinglePost
