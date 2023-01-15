import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { sendMessage } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const mapStateToProps = (state) =>{
    return{
        messages:state.dialogsPage.messages,
    }
}

export default compose(
    withAuthRedirect,connect(mapStateToProps,
        {sendMessage}))
    (Dialogs);