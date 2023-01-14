import preloader from "../../assets/preloader.svg"
import React from "react"
import classes from "../Users/Users.module.css"

const Preloader = () => {
    return <div className={classes.preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader;