import React from "react";
import Block from "../BlockNews/BlockNews";
import classes from "./Weather.module.css";

const Weather=(props) => {
    let weatherinfo = props.weather.map(w => <Block id ={w.id} header={w.header} news={w.news} img={w.img} />)
    
    return <div className={classes.blockacc}>
        {weatherinfo}
    </div>
}

export default Weather;