
import { connect } from "react-redux";
import { follow, setGroup, unfollow } from "../redux/groups-reduser";
import Groups from "./Groups";

const mapStateToProps = (state) =>{
   
    return{
        groups:state.groupsPage.groups
    }
}

const GroupsContainer = connect(mapStateToProps,{
    follow,unfollow,setGroup
})(Groups);
export default GroupsContainer;