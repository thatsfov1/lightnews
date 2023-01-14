import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestFriends } from "../redux/friends-reducer";
import Friends from "./Friends";
import {getCurrentPage, getFollowingInProgress, getFriends, getIsFetching, getPageSize} from '../redux/users-selectors'


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.requestFriends(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestFriends(pageNumber, this.props.pageSize);
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
     (FriendsContainer);
