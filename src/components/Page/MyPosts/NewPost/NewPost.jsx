import classes from './NewPost.module.css'

const NewPost = (props) => {
  return <div className={classes.news}>
    <img src="https://cdn.27.ua/sc--media--prod/default/82/13/ed/8213edef-2996-4de1-a9ea-fd07d08d3e21.jpeg" alt="ava" /> {props.message}
    <div>
     <span> likes:{props.likes} </span>
     <span>reposts:{props.reposts}</span>
    </div>
    <br />
    </div>

;

}



export default NewPost;
