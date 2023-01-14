import React from "react";
import { useState } from "react";
import Category from "../Categories/Category";
import classes from "./Politics.module.css";

const Politics= (props) => {
const [politics,setPolitics] = useState([
    { id: 1, header: "news 1", news: "bla", img: "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg" },
    { id: 2, header: "news 2", news: "blabla", img: "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE" },
    { id: 3, header: "news 3", news: "blavlabla", img: "https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=360" },
    { id: 4, header: "news 4", news: "blablablabla", img: "https://rootblog.pl/wp-content/uploads/2021/08/apple-music-logo.jpeg" }
    
])
    let politicsContent = Category(politics)
    return <div className={classes.blockacc}>
           {politicsContent}
    </div>
}

export default Politics;