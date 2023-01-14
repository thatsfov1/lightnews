import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Groups.module.css";
import {CiFilter,AiOutlineSearch} from "react-icons/all";


const Groups = ({groups,unfollow,follow}) => {

    return <div className={s.container}>
        <div className={s.search_container}>
            <span className={s.search_name}>Groups</span>
            <div className={s.search_input_container}>
                <div className={s.input_body}>
                    <input type='text' placeholder='Search here...' className={s.search_input}/>
                    <AiOutlineSearch className={s.input_icon} size={35} />
                </div>
                <CiFilter size={35} className={s.filter_icon}/>
            </div>
        </div>
        
        <div className={s.groups_container}>{
            groups.map(g => <Group key={g.id} id={g.id} followed={g.followed}  email={g.email}
                                   name={g.name} avatar={g.avatar}  follow={follow} unfollow={unfollow}
                                    wallpaper={g.wallpaper}
            /> )}
        </div>
    </div>
    
}

const Group = ({follow,unfollow,avatar,id,name,
                   email,followed,wallpaper}) => {
  return <div className={s.group}>

      <div className={s.wallpaper}>
          <img src={wallpaper} />
      </div>

      <div className={s.group_info}>
          <div className={s.avatar}>
              <img src={avatar}/>
          </div>
          <div className={s.name_email}>
              <NavLink to={/groups/ + id} >
                  {name}
              </NavLink>

              <div className={s.info}>
                  {email}
              </div>
          </div>
          <div className={s.follow_button}>
              {followed ? <button onClick={()=>{unfollow(id)}} className={s.button + ' ' + s.unfollow}>UnFollow</button>
                  : <button className={s.button + ' ' + s.follow}  onClick={()=>{follow(id)}} >Follow</button>}
          </div>
      </div>


  </div>

}

export default Groups;


