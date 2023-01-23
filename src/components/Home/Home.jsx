import React from 'react'
import s from './Home.module.css'
import SinglePost from "../Page/PageCategories/About/SinglePost";
import {connect} from "react-redux";
import loading from '../../assets/loading.svg'
import suggest_group from '../../assets/suggest_group.png'
import {addEvent, deleteEvent, deleteSuggestFriend, toggleEvent} from "../redux/home-reducer";
import {faker} from "@faker-js/faker";
import Events from "./Events";

const Home = ({profile,suggestFriends, stories, post, deleteSuggestFriend,
                  events, addEvent, deleteEvent,toggleEvent}) => {
    return (
    <div className={s.container}>
      <div className={s.main}>
          <div className={s.stories}>
              {stories.map(st => <div className={s.single_story}>
                  <div className={s.single_story_body}>
                      <img alt='avatar' src={st.avatar} className={s.single_story_avatar}/>
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
            <Events events={events} addEvent={addEvent} deleteEvent={deleteEvent} toggleEvent={toggleEvent}/>
            <div className={s.side_tool_container}>
                <div className={s.header}>
                    <span className={s.header_category}>
                        Groups Suggests
                    </span>
                    <span className={s.header_see_all}>
                        See All
                    </span>
                </div>
                <div className={s.group_suggest_container}>
                    <div className={s.group_suggest_logo}>
                        <img alt='logo' src={suggest_group}/>
                    </div>
                    <div className={s.group_suggest_info}>
                        <div className={s.group_suggest_members}>
                                {[...Array(4)].map(() => (
                                    <div className={s.members_images}>
                                        <img alt='avatar' src={faker.internet.avatar()}/>
                                    </div>
                                ))}
                            <div style={{width:"20%", zIndex:1}}><span className={s.members_count}>
                                +4
                            </span></div>
                        </div>
                        <span style={{color:"#eeeeee",width:"50%", fontWeight:700}}>
                            Members apply
                        </span>
                    </div>
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


export default connect(mapStateToProps,{deleteSuggestFriend,addEvent,deleteEvent,toggleEvent})(Home)
