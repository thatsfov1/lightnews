import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getFriends } from "../redux/friends-reduser";
import Friends from "./Friends";


class FriendsContainer extends React.Component {
    componentDidMount() {

        this.props.getFriends(this.props.currentPage, this.props.pageSize);
        
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getFriends(pageNumber, this.props.pageSize);
    }
    
    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends
                totalCount={this.props.totalCount}
                friends={this.props.friends}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>


    }
}

const mapStateToProps = (state) => {

    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalCount: state.friendsPage.totalCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,
    }
}
export default connect(mapStateToProps,
     {follow,unfollow,setCurrentPage,toggleFollowingProgress,getFriends})
     (FriendsContainer);
