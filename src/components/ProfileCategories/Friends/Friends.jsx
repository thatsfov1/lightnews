import React from 'react'
import s from './Friends.module.css'
import userphoto from "../../../assets/userphoto.png";
import {faker} from "@faker-js/faker";
import {AiOutlineSearch} from "react-icons/all";

const Friends = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <b style={{fontSize: "18px"}}>All Friends</b>
                <div className={s.input_container}>
                    <input className={s.input} placeholder='Search'/>
                    <AiOutlineSearch size={25} className={s.input_icon}/>
                </div>
                <span style={{color: "#0056fe", fontWeight: 500}}>Requests</span>
            </div>
            <div className={s.friends_body}>
                {
                    [...Array(24)].map(() => <div className={s.single_friend}>
                            <img alt='user' src={userphoto}/>
                            <div>
                                <div style={{fontSize: '18px', fontWeight: 700}}>
                                    {faker.name.fullName()}
                                </div>
                                <div style={{color: '#999999', fontSize: '14px'}}>
                                    {faker.lorem.slug(3)}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}


export default Friends
