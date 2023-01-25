import React from "react";
import {Link} from "react-router-dom";
import s from "./Users.module.css";
import userphoto from "../../assets/userphoto.png";

const SingleUser = ({userId, name, status, unfollow, followingInProgress,
                        follow, followed, photo
                    }) => {

    return <div className={s.user}>

        <div className={s.user_info}>
            <div className={s.avatar}>
                <img alt='user' src={photo != null ? photo : userphoto}/>
            </div>
            <div className={s.name}>
                {name}
            </div>

            <div className={s.info}>
                {status != null ? status : "no status yet"}
            </div>

            <div>
                {followed ? <button disabled={followingInProgress.some(id => id === userId)}
                                    onClick={() => follow(userId)}
                                    className={s.button + ' ' + s.unfollow}>
                        UnFollow
                    </button> :

                    <button disabled={followingInProgress.some(id => id === userId)} onClick={() => unfollow(userId)}
                            className={s.button + ' ' + s.follow}>
                        Follow
                    </button>}
            </div>
        </div>

        <Link to={/profile/ + userId} className={s.view_profile}>
            View Profile
        </Link>
    </div>
}



export default SingleUser;