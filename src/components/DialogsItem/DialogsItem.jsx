import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs/Dialogs.module.css";


const DialogsItem = (props) => {

    let path = /dialogs/ + props.id;

    return <div>
        <div className={classes.dialogs}>
            <div className={classes.avatar}>
                <img src={props.avatar} />
                <NavLink to={path} className={classes.name}>{props.name}</NavLink>
            </div>

            <div className={classes.message}>
                {props.message}

            </div>
        </div>
        
    </div>


}



export default DialogsItem;