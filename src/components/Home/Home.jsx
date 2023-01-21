import React, {useState} from 'react'
import s from './Home.module.css'
import SinglePost from "../Page/PageCategories/About/SinglePost";
import {connect} from "react-redux";
import loading from '../../assets/loading.svg'
import {addEvent, deleteSuggestFriend} from "../redux/home-reducer";
import {AiOutlineArrowRight, GrFormAdd} from "react-icons/all";
import {Input, TextField} from "@mui/material";
import NewEvent from "./NewEvent";

const Home = ({profile,suggestFriends, stories, post, deleteSuggestFriend, events, addEvent}) => {

    const [showNewEvent, setShowNewEvent] = useState(false);

    return (
    <div className={s.container}>
      <div className={s.main}>
          <div className={s.stories}>
              {stories.map(st => <div className={s.single_story}>
                  <div className={s.single_story_body}>
                      <img src={st.avatar} className={s.single_story_avatar}/>
                      <div className={s.single_story_name}>{st.name}</div>
                  </div>
              </div>)}
          </div>
          <div className={s.posts_container}>
            <SinglePost post={post} profile={profile}/>
          </div>
          <div className={s.loading}>
           <img alt='loading...' src={loading}/>
          </div>
      </div>
        <div className={s.right_side}>
            {suggestFriends.length>0 && <div className={s.side_tool_container}>
                <div className={s.header}>
                    <span className={s.header_category}>
                        Friends Suggests
                    </span>
                    <span className={s.header_see_all}>
                        See All
                    </span>
                </div>
                <div className={s.friends_suggests}>
                    {suggestFriends.map(fr => (
                        <div key={fr.id} className={s.single_suggest_container}>
                            <div className={s.single_suggest}>
                                <img alt='avatar' src={fr.avatar}/>
                                <div>
                                    <b>{fr.fullName}</b>
                                    <div className={s.single_mutual}>
                                        {fr.mutual} mutual friends
                                    </div>
                                </div>
                            </div>
                            <div className={s.buttons}>
                                <button onClick={() => deleteSuggestFriend(fr.id)} className={s.add_button}>
                                    Add
                                </button>
                                <button onClick={() => deleteSuggestFriend(fr.id)} className={s.delete_button}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>}
            <div className={s.side_tool_container}>
                <div className={s.header}>
                    <span className={s.header_category}>
                        Events
                    </span>
                    <span onClick={()=> setShowNewEvent(!showNewEvent)} className={s.header_add_icon}>
                        <GrFormAdd size={20}  color='#ADD9E5'/>
                    </span>
                    {showNewEvent && <NewEvent addEvent={addEvent} setShowNewEvent={setShowNewEvent}/>}
                </div>
                <div className={s.events_container}>
                    {events.map((e) => (
                        <div className={s.single_event}>
                            <div className={s.date_container}>
                                <div className={s.event_month}>
                                    {e.month}
                                </div>
                                <div className={s.event_date}>
                                    {e.day}
                                </div>
                            </div>
                            <div className={s.event_info}>
                                <b style={{fontSize:'14px'}}>
                                    {e.title}
                                </b>
                                <div style={{color:'#b3bbc1', fontSize:'13px'}}>
                                    {e.message}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.side_tool_container}>
                <div className={s.header}>
                    <span className={s.header_category}>
                        Groups Suggests
                    </span>
                    <span className={s.header_see_all}>
                        See All
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        post:state.homePage.post,
        profile:state.homePage.profile,
        stories:state.homePage.stories,
        suggestFriends:state.homePage.suggestFriends,
        events:state.homePage.events,
    }
}


export default connect(mapStateToProps,{deleteSuggestFriend,addEvent})(Home)
