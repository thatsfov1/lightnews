import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import React from 'react';
import {BsChatRightDots, FaUserFriends, GrSettingsOption, HiOutlineUserGroup, IoPersonOutline} from "react-icons/all";

export const NavbarFeeds = () => {
  return <nav className={s.nav}>
    <div style={{padding:"10px"}}>
      <span className={s.title}>New Feeds</span>
      <div className={s.items_container}>
        <div className={s.item}>
          <div className={s.item_logo + " " + s.groups}><HiOutlineUserGroup size={20}/></div>
          <NavLink to="/groups"> Groups</NavLink>
        </div>
        <div className={s.item}>
          <div className={s.item_logo + " " + s.profile}><IoPersonOutline size={20}/></div>
          <NavLink to="/profile/26582">Profile</NavLink>
        </div>
        <div className={s.item}>
          <div className={s.item_logo + " " + s.dialogs}><BsChatRightDots size={20}/></div>
          <NavLink to="/dialogs"> Dialogs</NavLink>
        </div>
        <div className={s.item}>
          <div className={s.item_logo + " " + s.friends}><FaUserFriends size={20}/></div>
          <NavLink to="/users"> Users</NavLink>
        </div>
    </div>
  </div>
  </nav>;
}

export const NavbarAccount = () => {
  return <nav className={s.nav + ' ' + s.nav_account}>
    <span className={s.title}> Account</span>
      <div className={s.item}>
        <GrSettingsOption/>
        <NavLink to="/settings"> Settings</NavLink>
      </div>
  </nav>
}
