import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setFriendsAC, setUsersTotalCountAC, unfollowAC } from "../redux/friends-reduser";
import Friends from "./Friends";


class FriendsContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriend(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriend(response.data.items)
        })
    }

    render() {


        return <Friends 
            totalCount={this.props.totalCount}
            friends={this.props.friends}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            />

    }
}

const mapStateToProps = (state) =>{
   
    return{
        friends:state.friendsPage.friends,
        pageSize:state.friendsPage.pageSize,
        totalCount:state.friendsPage.totalCount,
        currentPage:state.friendsPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        follow:(friendId)=>{
            dispatch(followAC(friendId))
        },
        unfollow:(friendId)=>{
            dispatch(unfollowAC(friendId))
        },
        setFriend:(friendId)=>{
            dispatch(setFriendsAC(friendId))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount:(totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FriendsContainer);
