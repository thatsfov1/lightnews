import classes from './Page.module.css';
import React, {useEffect, useState} from 'react';
import Status from './Status';
import ProfileInfo from './MyPosts/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {saveChangesProfile} from "../redux/profile-reducer";



const Page = (props) => {

  return <div className={classes.content}>
    <div className={classes.info}>
      <ProfileInfo profile={props.profile} id={props.id}
                   savePhoto ={props.savePhoto} status={props.status}
                   updateStatus={props.updateStatus} saveChangesProfile={props.saveChangesProfile}
      />
       </div>
    <br />
    <div>
      {props.id ===26582 && <MyPostsContainer/> }
    </div>



    
  </div>;
}

export default Page;