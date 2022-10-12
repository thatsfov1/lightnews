import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Settings.module.css";

const Settings=() => {

    let path1 = /settings/ + "contacts";
    let path2 = /settings/ + "chlgps";
    let path3 = /settings/ + "htdt";
    let path4 = /settings/ + "comrules";
    let path5 = /settings/ + "support";

    return <div className={classes.settings}>
        <h3>HELP</h3>
        <ul>
            <li><NavLink to={path1} >Contacts</NavLink></li>
            <li> <NavLink to={path2} >Change login and password</NavLink></li>
            <li> <NavLink to={path3} > How to do this</NavLink></li>
            <li> <NavLink to={path4} >Community rules</NavLink></li>
            <li> <NavLink to={path5} >Support</NavLink></li>
            
        </ul>
    </div>
}

export default Settings;