import React from "react";
import classes from "./Page.module.css"

class Status extends React.Component{
    state ={
        editMode:false,
        status:this.props.status
    }
    
    activateEditMode =() =>{
        this.setState({
            editMode:true,
        })

    }
    deactivateEditMode =() =>{
        this.setState({
            editMode:false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange =(e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status)
        this.setState({
            status:this.props.status
        })
    }

    render(){
        return <div>
        {!this.state.editMode && 
         <div className={classes.status_text}>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
         </div>
        }
       {this.state.editMode && 
        <div className={classes.status_input}>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" />
        </div>
       }
       
     </div>
    }
    
}
export default Status;