import * as axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";
import FriendsSearch from "./FriendsSearch";

const Friends = (props) => {

    // axios.get("https://social-network.samuraijs.com/api/1.0/users").then

    return <div className={classes.friends}>
        <FriendsSearch/>
        <div className={classes.name}> Friends:</div>
        
        <div className={classes.friendname}>{
            props.friends.map(fr => <div key={fr.id} className={classes.friend + ' ' + classes.active}>
                
                <div className={classes.avatar}>
            <img src={fr.avatar} />  
                </div>
                
                <NavLink to={/friends/ + fr.id} >{fr.name}</NavLink>
                
                <div className={classes.info}>
                    {fr.info}
                 </div>
        
                <div>
                {fr.followed ? <button onClick={()=>{props.unfollow(fr.id)}} className={classes.buttonUnfollow}>UnFollow</button> : <button className={classes.buttonFollow}  onClick={()=>{props.follow(fr.id)}} >Follow</button>}
                </div>
                
                
                
                </div>)
                }
        
        </div>
        
    </div>
    
}

export default Friends;


