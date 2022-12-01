import classes from './Header.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>

        <img src="lightning.png" alt="logo" />
        <div className={classes.login}>
            {props.isAuth ? <NavLink to={'/profile/26582'}>{props.login}</NavLink>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;

}

export default Header;