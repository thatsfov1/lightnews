import React from "react";
import classes from "./BlockNews.module.css";

const Block = (props) => {
    return <div className={classes.block}>
        <div className={classes.newstext}>
            <header className={classes.header} > <a href={props.fullnews}> {props.header}</a></header>
            <div className={classes.news}>
                {props.news} 
                </div>
                <div className={classes.readmore}>
                <a href={props.fullnews}>Read more...</a>
                </div>
        </div>
       <div className={classes.newsimg}>
        <img src={props.img} alt="news photo" />
       </div>
    </div>
}

export default Block;