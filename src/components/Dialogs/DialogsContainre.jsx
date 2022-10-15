import React from "react";
import DialogsItem from "../DialogsItem/DialogsItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

import classes from "./Dialogs.module.css";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }



    return <Dialogs sendMessage={sendMessage} newMessageBody={onMessageChange}
    dialogsPage={state}/>

}
export default DialogsContainer;