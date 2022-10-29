import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) =>{

    return{
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        newMessageBody: (body)=> {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;