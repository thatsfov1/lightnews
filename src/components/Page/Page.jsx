import MyPosts from './MyPosts/MyPosts';
import classes from './Page.module.css';
import React from 'react';
import Status from './Status';
import ProfileInfo from './MyPosts/ProfileInfo';








const Page = (props) => {
  let profile = props.profile.map(el => <ProfileInfo name={el.name} id={el.id} avatar={el.avatar} /> )

  return <div className={classes.content}>
    <div className={classes.background}><img className='background' src="lightning-5.jpeg" alt="background" /></div>
    
    <div className={classes.info}>
      {profile}
       </div>
    <Status/>
    <br />
    
    <MyPosts post={props.profilePage.post} 
    dispatch={props.dispatch} 
    newPostText={props.profilePage.newPostText}
    />
    
  </div>;
}

export default Page;