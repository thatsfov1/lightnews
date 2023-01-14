import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { sendMessage } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const mapStateToProps = (state) =>{
    return{
        dialogsPage:state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (message) =>{
            dispatch(sendMessage(message))
        }
    }
}

export default compose(
    withAuthRedirect,connect(mapStateToProps,
        mapDispatchToProps))
    (Dialogs);;