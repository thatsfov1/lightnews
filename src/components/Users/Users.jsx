import React from "react";
import s from "./Users.module.css";
import {Pagination, Stack} from "@mui/material";
import {AiOutlineSearch, CiFilter} from "react-icons/all";
import SingleUser from "./SingleUser";
import Preloader from "../common/Preloader";


const Users = ({
                   pageSize, onPageChange, unfollow,
                   followingInProgress, follow, totalCount, friends,isFetching
               }) => {

    const pagesCount = Math.ceil(totalCount / pageSize)

    return <div className={s.container}>
        <div className={s.search_body}>
            <span className={s.search_name}>All Users</span>
            <div className={s.input_container}>
                <div className={s.input_body}>
                    <input type='text' placeholder="Search all Users" className={s.search_input}/>
                    <AiOutlineSearch className={s.input_icon} size={35}/>
                </div>
                <CiFilter size={35} className={s.filter_icon}/>
            </div>
        </div>

        {isFetching ? <Preloader/> : <div className={s.users}>{
            friends.map(fr => <SingleUser key={fr.id} userId={fr.id} name={fr.name} photo={fr.photos.small}
                                          status={fr.status}
                                          followingInProgress={followingInProgress} followed={fr.followed}
                                          follow={follow}
                                          unfollow={unfollow}/>)}
        </div>}

        <div className={s.pagination}>
            <Stack spacing={2}>
                <Pagination onChange={(e) => onPageChange(e.target.textContent)}
                            count={pagesCount}/>
            </Stack>
        </div>
    </div>
}


export default Users;


