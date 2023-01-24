import React from "react";
import s from "./Settings.module.css";
import {AiOutlineQuestionCircle, BsCreditCard, FiLock, MdPlace, SlArrowRight} from "react-icons/all";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {logout} from "../redux/auth-reducer";
import {useNavigate} from "react-router-dom";

const Settings = ({logout}) => {

    const navigate = useNavigate()

    return <div className={s.container}>
        <h1>Settings</h1>
        <div className={s.account}>
            <span className={s.title}>
                Account
            </span>
            <div className={s.list}>
                <div onClick={() => navigate('address')} className={s.item}>
                    <div className={s.item_icon + ' ' +s.address_color}>
                        <MdPlace size={25}/>
                    </div>
                    <div className={s.item_title}>
                        Saved Address
                    </div>
                    <span>
                        <SlArrowRight/>
                    </span>
                </div>
                <div onClick={() => navigate('cards')} className={s.item}>
                    <div className={s.item_icon + ' ' + s.card_color}>
                        <BsCreditCard size={25}/>
                    </div>
                    <div className={s.item_title}>
                        My cards
                    </div>
                    <span>
                        <SlArrowRight/>
                    </span>
                </div>
            </div>
        </div>
        <div className={s.other}>
            <span className={s.title}>
                Other
            </span>
            <div className={s.list}>
                <div onClick={() => navigate('help')} className={s.item}>
                    <div className={s.item_icon + ' ' +s.help_color }>
                        <AiOutlineQuestionCircle size={25}/>
                    </div>
                    <div className={s.item_title}>
                        Help
                    </div>
                    <span>
                        <SlArrowRight/>
                    </span>
                </div>
                <div onClick={()=> logout()} className={s.item}>
                    <div className={s.item_icon + ' ' + s.lock_color}>
                        <FiLock size={25}/>
                    </div>
                    <div className={s.item_title}>
                        Logout
                    </div>
                    <span>
                        <SlArrowRight/>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default compose(connect(null,{logout}), withAuthRedirect)(Settings);