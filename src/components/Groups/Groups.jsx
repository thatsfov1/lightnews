import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Groups.module.css";
import GroupSearch from "./GroupSearch";

const Groups = (props) => {

    return <div className={classes.groups}>
        <GroupSearch/>
        <div className={classes.name}> Groups:</div>
        
        <div className={classes.groupname}>{
            props.groups.map(g => <div key={g.id} className={classes.group + ' ' + classes.active}>
                
                <div className={classes.avatar}>
            <img src={g.avatar} />  
                </div>
                
                <NavLink to={/groups/ + g.id} >{g.name}</NavLink>
                
                <div className={classes.info}>
                    {g.info}
                 </div>
        
                <div>
                {g.followed ? <button onClick={()=>{props.unfollow(g.id)}} className={classes.buttonUnfollow}>UnFollow</button> : <button className={classes.buttonFollow}  onClick={()=>{props.follow(g.id)}} >Follow</button>}
                </div>
                
                
                
                </div>)
                }
        
        </div>
        
    </div>
    
}

export default Groups;


