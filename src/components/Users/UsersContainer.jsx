import React, {useEffect} from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestFriends } from "../redux/friends-reducer";
import Users from "./Users";
import {getCurrentPage, getFollowingInProgress, getFriends, getIsFetching, getPageSize} from '../redux/users-selectors'


const UsersContainer = ({currentPage,pageSize,isFetching,totalCount,friends,follow,unfollow,
                            followingInProgress,setCurrentPage,requestFriends,toggleFollowingProgress}) => {

    useEffect(() => {
        requestFriends(currentPage, pageSize);
    }, []);
    

     const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        requestFriends(pageNumber, pageSize);
        window.scroll(0,0)
    }


    {
        return <>
            {isFetching ? <Preloader/> : null}
            <Users
                totalCount={totalCount}
                friends={friends}
                pageSize={pageSize}
                currentPage={currentPage}
                follow={follow}
                unfollow={unfollow}
                onPageChange={onPageChange}
                toggleFollowingProgress={toggleFollowingProgress}
                followingInProgress={followingInProgress}
            />
        </>


    }
}
const mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalCount: state.friendsPage.totalCount,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default connect(mapStateToProps,
     {follow,unfollow,setCurrentPage,toggleFollowingProgress,requestFriends})
     (UsersContainer);
