
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";
import FriendsSearch from "./FriendsSearch";
import userphoto from '../../assets/userphoto.png'



const Friends =(props)=>{

        let pagesCount = Math.ceil(props.totalCount / props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
        let curP = props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);


        return <div className={classes.friends}>
            <FriendsSearch />
            <div className={classes.name}> Friends:
            </div>
            <div className={classes.totalPage}>
                {slicedPages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}> {p}</span>
                })}
            </div>
            <div className={classes.friendname}>{
                props.friends.map(fr => <div key={fr.id} className={classes.friend + ' ' + classes.active}>

                    <div className={classes.avatar}>
                    <NavLink to={/profile/ + fr.id} ><img src={fr.photos.small != null ? fr.photos.small : userphoto} /></NavLink>
                    </div>

                    <NavLink to={/profile/ + fr.id} >{fr.name}</NavLink>

                    <div className={classes.info}>
                        {fr.status != null ? fr.status : "no status yet"}
                    </div>

                    <div>
                        {fr.followed ? <button onClick={() => {props.unfollow(fr.id) }} className={classes.buttonUnfollow}>UnFollow</button> :
                            <button className={classes.buttonFollow} onClick={() => { props.follow(fr.id) }} >Follow</button>}
                    </div>



                </div>)
            }

            </div>

        </div>

    }

export default Friends;


