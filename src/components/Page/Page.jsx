import s from './Page.module.css'
import React from 'react';
import Preloader from '../common/Preloader';
import userphoto from '../../assets/userphoto.png'
import Status from "./Status";
import {AiFillEdit} from "react-icons/all";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import nocover from '../../assets/no-cover.png'

const Page = ({profile, status, updateStatus,id}) => {
    const navigate = useNavigate()

    if (!profile) {
        return <Preloader/>
    }

    return <div className={s.container}>
        <div className={s.toolbar}>
            <div className={s.banner}>
                <img alt='background' src={nocover}/>
            </div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    {<img alt='user' src={profile.photos.large || userphoto}/>}
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
                        {id == 26582 ?<button onClick={() => navigate('/edit')}>
                        <AiFillEdit/> Edit Profile
                    </button>: null}
                </div>
            </div>
            <div className={s.tools}>
                <NavLink  to={``}> About</NavLink>
                <NavLink to={`info`}>Info</NavLink>
                <NavLink to={`friends`}>Friends</NavLink>
                <NavLink  to={`photos`}>Photos</NavLink>
                <NavLink to={`videos`}>Videos</NavLink>
            </div>
        </div>
        <Outlet/>
    </div>
}


export default Page;
