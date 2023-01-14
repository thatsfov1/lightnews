import classes from './ProfileInfo.module.css'
import React, {useState} from 'react';
import Preloader from '../../common/Preloader';
import userphoto from '../../../assets/userphoto.png'
import ProfileInfoData from "./ProfileInfoData";
import Status from "../Status";
import ProfileInfoDataEditForm from "./ProfileInfoDataEditForm";

const ProfileInfo = (props) => {

    const [editMode,setEditMode] = useState(false)

if(!props.profile){
  return <Preloader/>
}

const onSelectPhoto = (e) =>{
    if(e.target.files.length){
        props.savePhoto(e.target.files[0])
    }
}

const saveChangesInfo=()=>{
    return setEditMode(false)
}
  return <div className={classes.avatar} >
     {<img src={props.profile.photos.large != null ? props.profile.photos.large : userphoto} /> }
      {props.id===26582 && <input type="file" onChange={onSelectPhoto}/>}
        <Status status={props.status} updateStatus={props.updateStatus}/>
      {editMode ? <ProfileInfoDataEditForm saveChangesInfo ={saveChangesInfo} profile={props.profile} saveChangesProfile={props.saveChangesProfile}/>
          : <ProfileInfoData goToEditMode={()=>setEditMode(true)} profile={props.profile} id={props.id}/>}
</div>
;}

export const Contacts =({contactTitle, contactLink})=>{
    return <div className={classes.info}>
        {contactTitle} : {contactLink ? <a target="_blank" href="{contactLink}">{contactLink}</a> : "No information"}
    </div>
}


export default ProfileInfo;
