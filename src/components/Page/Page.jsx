
import classes from './Page.module.css';
import React from 'react';
import Status from './Status';
import ProfileInfo from './MyPosts/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';






const Page = (props) => {

  return <div className={classes.content}>
    <div className={classes.background}><img className='background' src="lightning-5.jpeg" alt="background" /></div>
    
    <div className={classes.info}>
      <ProfileInfo profile={props.profile}/>
       </div>
    <Status/>
    <br />
    
    <MyPostsContainer />
    
  </div>;
}

export default Page;