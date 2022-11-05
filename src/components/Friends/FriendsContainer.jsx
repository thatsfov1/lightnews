import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader";
import { follow, setCurrentPage, setFriend, setUsersTotalCount, toggleIsFetching, unfollow } from "../redux/friends-reduser";
import Friends from "./Friends";


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setFriend(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setFriend(response.data.items)
        })
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
    }
}
export default connect(mapStateToProps,
     {follow,unfollow,setFriend,setCurrentPage,setUsersTotalCount,toggleIsFetching,})
     (FriendsContainer);
