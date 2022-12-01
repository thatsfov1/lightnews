import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData,authSuccess } from "../redux/auth-reduser";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authSuccess()
    }

    render() {
        return <>
        
            <Header {...this.props}/>
        </>


    }
}

const mapStateToProps = (state) => {
    return {
        login:state.auth.login,
        isAuth:state.auth.isAuth,
    }
}
export default connect(mapStateToProps,
     {setAuthUserData ,authSuccess})
     (HeaderContainer);
