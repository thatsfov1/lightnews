import React, {useState} from 'react'
import s from "../../pages/Home/Home.module.css";
import {FormControl,InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {AiOutlineArrowRight} from "react-icons/all";

const NewEvent = ({addEvent,setShowNewEvent}) => {

    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };
    const handleDayChange = (event) => {
        setDay(event.target.value);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendEvent = () => {
        if (!title || !message || !day) {
            setError(true)
            return
        } else {
            setError(false)
            addEvent(title,message,month,day)
            setShowNewEvent(false)
        }
    }
  return (
      <div className={s.new_event_container}>
          {error && <div className={s.error}>Fill all blanks</div>}
          <div className={s.new_event_text}>
              <TextField onChange={handleTitleChange} value={title} label="Title" variant="standard"/>
              <TextField onChange={handleMessageChange} value={message} label="Message" variant="standard"/>
          </div>
          <div >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel >Month</InputLabel>
                  <Select
                      value={month}
                      onChange={handleMonthChange}
                      label="Month"
                  >
                      <MenuItem value="">
                          <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Jan'}>Jan</MenuItem>
                      <MenuItem value={'Feb'}>Feb</MenuItem>
                      <MenuItem value={'Mar'}>Mar</MenuItem>
                      <MenuItem value={'Apr'}>Apr</MenuItem>
                      <MenuItem value={'May'}>May</MenuItem>
                      <MenuItem value={'Jun'}>Jun</MenuItem>
                      <MenuItem value={'Jul'}>Jul</MenuItem>
                      <MenuItem value={'Aug'}>Aug</MenuItem>
                      <MenuItem value={'Sep'}>Sep</MenuItem>
                      <MenuItem value={'Oct'}>Oct</MenuItem>
                      <MenuItem value={'Nov'}>Nov</MenuItem>
                      <MenuItem value={'Dec'}>Dec</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel>Day</InputLabel>
                  <Select
                      value={day}
                      onChange={handleDayChange}
                      label="Day"
                  >
                      <MenuItem value="">
                          <em>None</em>
                      </MenuItem>
                      {[...Array(30)].map((_, i) => (
                          <MenuItem value={i + 1}>
                              {i + 1}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <button onClick={()=> sendEvent()} className={s.new_event_send}>
                  <AiOutlineArrowRight size={20}/>
              </button>
          </div>

      </div>
  )
}

export default NewEvent
