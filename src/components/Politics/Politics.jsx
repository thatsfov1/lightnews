import React from "react";
import Block from "../BlockNews/BlockNews";
import classes from "./Politics.module.css";

const Politics=(props) => {
    
    
    let politinfo = props.politics.map(p => <Block id ={p.id} header={p.header} news={p.news} img={p.img} />)
    
    return <div className={classes.blockacc}>
            {politinfo}
    </div>
}

export default Politics;