import classes from './NewPost.module.css'
import React from 'react';
import userphoto from '/Users/thatsfov1/Documents/react/first/lightnews/src/assets/userphoto.png'


const NewPost = (props) => {
  return <div className={classes.news}>
    <img src={userphoto}  alt=''/> {props.message}
    <div>
     <span> likes:{props.likes} </span>
     <span>reposts:{props.reposts}</span>
    </div>
    <br />
    </div>

;

}



export default NewPost;
