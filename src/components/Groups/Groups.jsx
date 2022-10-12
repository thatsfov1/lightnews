import React from "react";
import GroupItem from "./GroupItem/GroupItem";
import classes from "./Groups.module.css";
import GroupSearch from "./GroupSearch";


const Groups = (props) => {

    let groups = props.group.map(g => <GroupItem name={g.name} id={g.id} avatar={g.avatar} info={g.info}/> );

    
    return <div className={classes.groups}>
        <GroupSearch/>
        <div className={classes.name}> Groups:</div>

        <div className={classes.groupname}>
            { groups }
        </div>
        
    </div>
}

export default Groups;