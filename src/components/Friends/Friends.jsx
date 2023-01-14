import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";
import FriendsSearch from "./FriendsSearch";
import userphoto from '../../assets/userphoto.png'
import Paginator from "../utils/Paginator";



const Friends = (props) => {

    return <div className={classes.friends}>
        <FriendsSearch />
        <div className={classes.name}> Friends:
        </div>
        <div className={classes.totalPage}>

            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pageSize={props.pageSize} totalCount={props.totalCount}/>

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
                    {fr.followed ? <button disabled={props.followingInProgress.some(id=>id === fr.id)} onClick={() => {
                        props.follow(fr.id)
                    }
                    }

                        className={classes.buttonUnfollow}>UnFollow</button> :

                        <button disabled={props.followingInProgress.some(id=>id === fr.id)} onClick={() => {
                            props.unfollow(fr.id)
                        }
                        }
                            className={classes.buttonFollow} >Follow</button>}
                </div>



            </div>)
        }

        </div>

    </div>

}

export default Friends;


