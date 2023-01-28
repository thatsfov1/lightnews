import React, {useEffect, useRef} from "react";
import s from "./Dialogs.module.css";
import DialogsForm from "./DialogsForm";
import {faker} from "@faker-js/faker";
import {HiOutlineStatusOnline} from "react-icons/all";

const Dialogs = ({messages,sendMessage}) => {

    const  online = faker.datatype.boolean()

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        if( messagesEndRef.current){
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return <div className={s.container}>
        <div className={s.row}>
            <div className={s.header}>
                <div className={s.avatar}>
                    <img alt='avatar' src={faker.internet.avatar()}/>
                </div>
                <div className={s.user_info}>
                    <div className={s.name}>
                        {faker.name.fullName()}
                    </div>
                    <div className={s.last_online}>
                        {online ? <span>
                        <HiOutlineStatusOnline/> online
                    </span> : <span>Last seen at: {faker.date.recent().toTimeString().slice(0, 5)}</span>}
                    </div>
                </div>
            </div>
            <div className={s.chat}>
                {messages.map(m => (
                    <span key={m.id}
                          className={m.fromMe ? s.message_container + ' ' + s.fromMe : s.message_container + ' ' + s.fromFriend}>
                    <span className={m.fromMe ? s.message_body : null}>
                        <span className={s.message}>{m.message}</span>
                        <span
                            className={m.fromMe ? s.time_fromMe + " " + s.message_time : s.message_time}>{m.time}</span>
                    </span>
                </span>
                ))}
                <div ref={messagesEndRef}/>
            </div>
            <div>
                <DialogsForm sendMessage={sendMessage}/>
            </div>
        </div>
    </div>
}

export default Dialogs;