import classes from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import React from 'react';



const MyPosts = (props) => {

debugger
  let messageInfo = props.post.map (m => <NewPost id={m.id} message={m.message} likes={m.likes} reposts={m.reposts} /> )

 let newPostElement = React.createRef();

  let addNews = () =>{
   props.addNews();
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewTextPost(text);
  }
  
  return <div className={classes.content}>
    <div className={classes.creatpost}>
      New Post
      <br />
      
      <textarea className={classes.area} name="Search" id="" cols="15" rows="3" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
    <button className={classes.button} onClick={addNews}>Create</button>
      </div>
    
     <div className={classes.infopost} >Your Posts:</div>   
     <br /> 
     {messageInfo}
  </div>;
}


export default MyPosts;
