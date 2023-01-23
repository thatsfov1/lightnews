import React, {useState,useEffect} from "react";
import s from "./Page.module.css"

const Status =({status,updateStatus})=>{

    let [editMode,setEditMode] = useState(false)
    let [statusValue,setStatusValue] = useState(status)

    const activateEditMode =()=>{
            setEditMode(true)
        }
     const   deactivateEditMode =()=>{
            setEditMode(false)
            updateStatus(statusValue)
        }

      const  onStatusChange =(e)=>{
          setStatusValue(e.currentTarget.value)
        }

        useEffect(()=>{
            setStatusValue(status)
        },[status])

        return <div>
       {editMode
           ? <input className={s.status_input} onChange={onStatusChange}
                   autoFocus={true} onBlur={deactivateEditMode} value={statusValue} type="text" />
           : <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
       }
     </div>
    }
    

export default Status;