import classes from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../common/Preloader';
import userphoto from '../../../assets/userphoto.png'

const ProfileInfo = (props) => {

if(!props.profile){
  return <Preloader/>
}

  return <div className={classes.avatar} >
     {<img src={props.profile.photos.large != null ? props.profile.photos.large : userphoto}  alt=''/> }
     My Group
     
    </div>

;

}



export default ProfileInfo;
