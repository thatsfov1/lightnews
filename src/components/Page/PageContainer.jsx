import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import {getStatus, saveChangesProfile, savePhoto, updateStatus, userProfile} from '../redux/profile-reducer';
import Page from './Page';
import {useParams} from "react-router-dom";


const PageContainer =(props)=> {

    let {id} = useParams()

    if(!id){
        id = 26582
    }

    useEffect(()=>{
        props.getStatus(id)
        props.userProfile(id)
    },[id])

    return <div>
        <Page {...props}
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
              />
    </div>;
}

const mapStateToProps = (state) =>{
    return{
        profile:state.profilePage.profile,
        status:state.profilePage.status,
        email:state.auth.email,
    }
}
export default compose(
  connect(mapStateToProps,{getStatus, updateStatus,userProfile,savePhoto,saveChangesProfile}),
  withAuthRedirect,
)(PageContainer)
