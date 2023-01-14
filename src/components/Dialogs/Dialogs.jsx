import { Field, Form, Formik } from "formik";
import React, {useState} from "react";
import * as yup from 'yup'
import DialogsItem from "../DialogsItem/DialogsItem";
import s from "./Dialogs.module.css";
import DialogsForm from "./DialogsForm";
import {faker} from "@faker-js/faker";
import {HiOutlineStatusOnline} from "react-icons/all";



const Dialogs = ({dialogsPage,sendMessage}) => {

    const [online, setOnline] = useState(false);


    return <div className={s.container}>
        <div className={s.header}>
            <div className={s.avatar}>
                <img src={faker.internet.avatar()}/>
            </div>
            <div className={s.user_info}>
                <div className={s.name}>
                    {faker.name.fullName()}
                </div>
                <div className={s.last_online}>
                    {online ? <span>
                        <HiOutlineStatusOnline/> online
                    </span> : <span>Last seen at: {faker.date.recent().toTimeString().slice(0,5)}</span>}
                </div>
            </div>
        </div>
        <div>
            {dialogsPage.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name}
                                                       avatar={d.avatar} message={d.message} />)
            }
        </div>
        <div className={s.areamessages}>
            <DialogsForm sendMessage={sendMessage}/>
        </div>
    </div>
}

export default Dialogs;