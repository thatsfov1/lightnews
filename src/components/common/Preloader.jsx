import preloader from "../../assets/preloader.svg"
import React from "react"
import s from "../Users/Users.module.css"

const Preloader = () => {
    return <div className={s.preloader}>
        <img alt='preloader' src={preloader}/>
    </div>
}

export default Preloader;