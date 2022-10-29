
import { connect } from "react-redux";
import { followAC, setGroapsAC, unfollowAC } from "../redux/groups-reduser";
import Groups from "./Groups";

const mapStateToProps = (state) =>{
   
    return{
        groups:state.groupsPage.groups
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        follow:(groupId)=>{
            dispatch(followAC(groupId))
        },
        unfollow:(groupId)=>{
            dispatch(unfollowAC(groupId))
        },
        setGroup:(groupId)=>{
            dispatch(setGroapsAC(groupId))
        }
        
    }
}
const GroupsContainer = connect(mapStateToProps,mapDispatchToProps)(Groups);
export default GroupsContainer;