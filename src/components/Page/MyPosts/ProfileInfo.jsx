import classes from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../common/Preloader';

const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader/>
}

  return <div className={classes.avatar} >
     <img src="https://cdn.27.ua/sc--media--prod/default/82/13/ed/8213edef-2996-4de1-a9ea-fd07d08d3e21.jpeg"/>
     My Group
     <img src={props.profile.photos.large} alt='profile-avatar'/>
    </div>

;

}



export default ProfileInfo;
