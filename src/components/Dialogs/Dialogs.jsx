import React from "react";
import DialogsItem from "../DialogsItem/DialogsItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reduser";

import classes from "./Dialogs.module.css";



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsinfo = state.dialogs.map(d => <DialogsItem id={d.id} name={d.name} avatar={d.avatar} message={d.message} />)
    let newMessageBody = state.newMessageBody;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }



    return <div className={classes.abc}>
        <h1>Dialogs</h1>

        <div>{dialogsinfo}</div>
        <div className={classes.areamessages}>
            <div >
                <textarea className={classes.textarea} name="Message" cols="18" rows="4" placeholder="Comment the news" onChange={onMessageChange} value={newMessageBody}></textarea>
            </div>
            <div>
                <button className={classes.button} onClick={sendMessage}>Send</button>
            </div>
        </div>
    </div>

}
export default Dialogs;