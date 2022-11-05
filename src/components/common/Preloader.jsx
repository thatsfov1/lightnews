import preloader from "../../assets/preloader.svg"
import React from "react"
import classes from "../Friends/Friends.module.css"

const Preloader =(props)=>{
    return <div className={classes.preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader;