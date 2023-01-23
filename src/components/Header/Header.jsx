import s from './Header.module.css'
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {SiReactos} from "react-icons/si";
import {BsBell, BsChatDots, BsHouseDoor, BsSearch} from "react-icons/bs";


const Header = ({isAuth, login, notifications}) => {

    const [showNotifications, setShowNotifications] = useState(false);

    const navigate = useNavigate()

    return <header className={s.container}>
        <div onClick={() => navigate('/')} className={s.logo}>
            <SiReactos color='#ADD9E5' size={30}/> <span className={s.logo_text}>MeetFriend</span>
        </div>
        <div style={{display:"flex" ,gap:10}}>
            <div className={s.input_container}>
                <BsSearch className={s.input_icon} size={25} />
                <input placeholder='Start typing to search...' className={s.input}/>
            </div>
            {isAuth && <Link to='/' className={s.icon}>
                <BsHouseDoor size={20} />
            </Link>}
        </div>
        {isAuth ? <div className={s.icons}>
            <Link to='dialogs' className={s.icon}>
                <BsChatDots size={20}/>
            </Link>
            <div className={s.icon} onClick={() => setShowNotifications(!showNotifications)}>
                <BsBell size={20} />
                {showNotifications &&
                    <div className={s.not_container}>
                        <span className={s.not_title}>Notifications</span>
                        {notifications ? notifications : <span className={s.not_none}>No Notifications yet</span>}
                    </div>}
            </div>
            <Link className={s.account_container}  to='/settings'>
                <span className={s.account}>{login}</span>
            </Link>
        </div> : <div>
            <button className={s.login}>Log in</button>
            <button className={s.signin}></button>

        </div>}
    </header>;
}


export default Header;