import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../redux/auth-reduser";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true }).then(response => {
            debugger
        if(response.data.resultCode === 0){
                let {id,login,email} = response.data.data;
                this.props.setAuthUserData(id,login,email)
            }
            
        })
    }

    render() {


        return <>
            <Header {...this.props}/>
        </>


    }
}

const mapStateToProps = (state) => {
    return {
        login:state.login.id,
        isAuth:state.auth.isAuth,
    }
}
export default connect(mapStateToProps,
     {setAuthUserData})
     (HeaderContainer);
