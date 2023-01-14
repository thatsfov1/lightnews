import React from "react";
import classes from './ProfileInfo.module.css'
import {Contacts} from "./ProfileInfo";
// todo: причесати profileInfo

const ProfileInfoData =(props) =>{
    return <div className={classes.form}>
        <div className={classes.info}>
            Nickname: {props.profile.fullName}
        </div>
        <div className={classes.title}>Profile information:</div>

        {props.id === 26582 && <button onClick = {props.goToEditMode} className={classes.editbutton}>Edit info</button>}

       <div  className={classes.data}>
           <div className={classes.contacts}><div className={classes.contacts_title}>Contacts:</div> {Object.keys(props.profile.contacts).map(key =>{
               return <Contacts key={key} contactTitle={key} contactLink={props.profile.contacts[key]} />} )}
           </div>
           <div className={classes.about}>
               <div>
                   About me: {props.profile.aboutMe || "Nothing yet"}
               </div>
               <div>
                   Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
               </div>
               {props.profile.lookingForAJob &&
                   <div>
                       Professional skills:{props.profile.lookingForAJobDescription}
                   </div>}
           </div>
       </div>
    </div>
}
export default ProfileInfoData;