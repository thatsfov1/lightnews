import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { sendMessage, newMessageBody } from "../redux/dialogs-reduser";
import Dialogs from "./Dialogs";



const mapStateToProps = (state) =>{
    return{
        dialogsPage:state.dialogsPage,
    }
}

export default compose(withAuthRedirect,connect(mapStateToProps,{newMessageBody,sendMessage}))(Dialogs);;