import s from './Page.module.css'
import React from 'react';
import Preloader from '../common/Preloader';
import userphoto from '../../assets/userphoto.png'
import Status from "./Status";
import {AiFillEdit} from "react-icons/all";
import {Link, Outlet, useNavigate} from "react-router-dom";
import nocover from '../../assets/no-cover.png'

const Page = ({profile, status, updateStatus,}) => {
    const navigate = useNavigate()

    if (!profile) {
        return <Preloader/>
    }

    return <div className={s.container}>
        <div className={s.toolbar}>
            <div className={s.banner}>
                <img src={nocover}/>
            </div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    {<img src={profile.photos.large || userphoto}/>}
                </div>
                <div className={s.name_body}>
                  <span className={s.name}>
                      {profile.fullName}
                  </span>
                    <span className={s.status}>
                      <Status status={status} updateStatus={updateStatus}/>
                  </span>
                </div>
                <div className={s.change_button}>
                    <button onClick={() => navigate('/edit')}>
                        <AiFillEdit/> Edit Profile
                    </button>
                </div>
            </div>
            <div className={s.tools}>
                <Link to={``}> About</Link>
                <Link to={`info`}>Info</Link>
                <Link to={`friends`}>Friends</Link>
                <Link to={`photos`}>Photos</Link>
                <Link to={`videos`}>Videos</Link>
            </div>
        </div>
        <Outlet/>
    </div>
}


export default Page;
