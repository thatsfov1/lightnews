import MyPosts from './MyPosts/MyPosts';
import classes from './Page.module.css';
import React from 'react';
import Status from './Status';
import ProfileInfo from './MyPosts/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';








const Page = (props) => {

    let state = props.store.getState().profilePage;

  let profile = state.profile.map(el => <ProfileInfo name={el.name} id={el.id} avatar={el.avatar} /> )

  return <div className={classes.content}>
    <div className={classes.background}><img className='background' src="lightning-5.jpeg" alt="background" /></div>
    
    <div className={classes.info}>
      {profile}
       </div>
    <Status/>
    <br />
    
    <MyPostsContainer store={props.store}
    />
    
  </div>;
}

export default Page;