import React from "react";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../redux/auth-reducer";
import Header from "./Header";
import {userProfile} from "../redux/profile-reducer";


const HeaderContainer = (props) =>{

    return <>
        <Header {...props}/>
    </>
}

const mapStateToProps = (state) => {
    return {
        login:state.auth.login,
        isAuth:state.auth.isAuth,
        notifications:state.profilePage.notifications
    }
}
export default connect(mapStateToProps,
     {setAuthUserData,userProfile ,logout})
    // eslint-disable-next-line no-unexpected-multiline
     (HeaderContainer);
