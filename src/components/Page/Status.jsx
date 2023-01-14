import React, {useState,useEffect} from "react";
import classes from "./Page.module.css"

const Status =(props)=>{
    
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    const activateEditMode =()=>{
            setEditMode(true)
        }
     const   deactivateEditMode =()=>{
            setEditMode(false)
            props.updateStatus(status)
        }

      const  onStatusChange =(e)=>{
            setStatus(e.currentTarget.value)
        }

        useEffect(()=>{
            setStatus(props.status)
        },[props.status])


        return <div>
        {!editMode && 
         <div className={classes.status_text}>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
         </div>
        }
       {editMode && 
        <div className={classes.status_input}>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} type="text" />
        </div>
       }
       
     </div>
    }
    

export default Status;