
import { connect } from "react-redux";
import { followAC, setFriendsAC, unfollowAC } from "../redux/friends-reduser";
import Friends from "./Friends";

const mapStateToProps = (state) =>{
   
    return{
        friends:state.friendsPage.friends
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
        }
        
    }
}
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);
export default FriendsContainer;