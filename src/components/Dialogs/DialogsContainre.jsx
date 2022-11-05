import React from "react";
import { connect } from "react-redux";
import { sendMessage, newMessageBody } from "../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) =>{

    return{
        dialogsPage:state.dialogsPage
    }
}
const DialogsContainer = connect(mapStateToProps,{newMessageBody,sendMessage})(Dialogs);
export default DialogsContainer;