import s from './ProfileInfo.module.css'
import React, {useState} from 'react';
import Preloader from '../../common/Preloader';
import userphoto from '../../../assets/userphoto.png'
import ProfileInfoData from "./ProfileInfoData";
import Status from "../Status";
import ProfileInfoDataEditForm from "./ProfileInfoDataEditForm";
import {AiFillEdit} from "react-icons/all";
import {Link} from "react-router-dom";
import nocover from '../../../assets/no-cover.png'

const ProfileInfo = ({profile, status, updateStatus, id,
                         saveChangesProfile, savePhoto}) => {

    const [editMode,setEditMode] = useState(false)

if(!profile){
  return <Preloader/>
}

const onSelectPhoto = (e) =>{
    if(e.target.files.length){
        savePhoto(e.target.files[0])
    }
}

const saveChangesInfo=()=>{
    return setEditMode(false)
}


  return <div className={s.container}>
      <div className={s.toolbar}>
          <div className={s.banner}>
              <img src={nocover}/>
          </div>
          <div className={s.profile}>
              <div className={s.avatar} >
                  {<img src={profile.photos.large != null ? profile.photos.large : userphoto} /> }
                  {/*{id===26582 && <input type="file" onChange={onSelectPhoto}/>}*/}
              </div>
              <div className={s.name_body}>
                  <span className={s.name}>{profile.fullName}</span>
                  <span className={s.email}>{status || 'No status yet'}</span>
              </div>
              <div className={s.change_button}>
                  <button>
                      <AiFillEdit/> Edit Profile
                  </button>
              </div>
          </div>
          <div className={s.tools}>
              <Link >Publications</Link>
              <Link>Info</Link>
              <Link>Friends</Link>
              <Link>Photos</Link>
              <Link>Videos</Link>
          </div>
      </div>
  </div>






;}
//
// <Status status={status} updateStatus={updateStatus}/>
// {editMode ? <ProfileInfoDataEditForm saveChangesInfo ={saveChangesInfo} profile={profile} saveChangesProfile={saveChangesProfile}/>
//     : <ProfileInfoData goToEditMode={()=>setEditMode(true)} profile={profile} id={id}/>}

export const Contacts =({contactTitle, contactLink})=>{
    return <div className={s.info}>
        {contactTitle} : {contactLink ? <a target="_blank" href="{contactLink}">{contactLink}</a> : "No information"}
    </div>
}


export default ProfileInfo;
