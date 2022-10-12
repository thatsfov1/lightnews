import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return <div className={classes.avatar} >
     <img src={props.avatar}/>
    {props.name}
    </div>

;

}



export default ProfileInfo;
