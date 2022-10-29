import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./../Friends.module.css";

const FriendsItem = (props) => {
    
    let path = /friends/ + props.id;
    return <div className={classes.friend + ' ' + classes.active}>
        <div className={classes.avatar}>
            <img src={props.avatar} />

        </div>
        <NavLink to={path}  >{props.name}</NavLink>
        <div className={classes.info}>
            {props.info}
        </div>
        
        {props.followed ? <button onClick={()=>{props.unfollow(props.id)}} >UnFollow</button> : <button onClick={()=>{props.follow(props.id)}} >Follow</button>}
        
  
    </div>
}



export default FriendsItem;