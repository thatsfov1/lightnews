import React, {useState} from 'react'
import s from "./Home.module.css";
import {GrFormAdd, MdDelete} from "react-icons/all";
import NewEvent from "./NewEvent";
import {Checkbox} from "@mui/material";

const Events = ({events, addEvent, deleteEvent, toggleEvent}) => {

    const [showNewEvent, setShowNewEvent] = useState(false);

  return (
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
          {events.length>0 && <div className={s.events_container}>
              {events.map((e) => (
                  <div key={e.id} className={s.single_event}>
                      <div className={e.completed ? s.date_container_completed : s.date_container}>
                        <div className={s.event_month}>
                              {e.month}
                          </div>
                          <div className={s.event_date}>
                              {e.day}
                          </div>
                      </div>
                      <div className={e.completed ? s.event_info_completed :s.event_info }>
                          <b style={{fontSize: '14px'}}>
                              {e.title}
                          </b>
                          <div style={{color: '#b3bbc1', fontSize: '13px'}}>
                              {e.message}
                          </div>
                          <Checkbox size='small' checked={e.completed} onChange={()=> toggleEvent(e.id)}/>
                      </div>
                      <MdDelete onClick={() => deleteEvent(e.id)} style={{marginTop: 15}}
                                color='#353935' size={30}/>
                  </div>
              ))}
          </div>}
      </div>
  )
}

export default Events
