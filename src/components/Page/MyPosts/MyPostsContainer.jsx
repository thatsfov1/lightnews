import classes from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import React from 'react';
import { addNewsActionCreator, updateNewTextPostActionCreator } from '../../redux/profile-reduser';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addNews = () =>{
    let action =(addNewsActionCreator());
    props.store.dispatch(action)
  }

  let onPostChange = (text) =>{
    let action =updateNewTextPostActionCreator(text);
    props.store.dispatch(action)
  }
  
  return <MyPosts updateNewTextPost={onPostChange}
   addNews={addNews}
   post={state.profilePage.post}
    newPostText={state.profilePage.newPostText}
   
   />;
}


export default MyPostsContainer;
