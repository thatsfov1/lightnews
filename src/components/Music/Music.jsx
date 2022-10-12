import React from "react";
import Block from "../BlockNews/BlockNews";
import classes from "./Music.module.css";

const Music=(props) => {
    let musicinfo = props.music.map(m => <Block id ={m.id} header={m.header} news={m.news} img={m.img} />)
    
    
    return <div className={classes.blockacc}>
    {musicinfo}
    </div>
}

export default Music;