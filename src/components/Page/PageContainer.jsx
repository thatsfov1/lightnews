import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { setUserProfile,getStatus,updateStatus } from '../redux/profile-reduser';
import Page from './Page';




class PageContainer extends React.Component{

componentDidMount(){
  
  let id = this.props.router.params.id;
  if(!id){
    id = 26582
  }
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
            this.props.setUserProfile(response.data)
        })
        this.props.getStatus(id)
}

  render(){
  return <div>
    
    <Page {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  </div>;
}
}

const mapStateToProps = (state) => {
  return {
      profile:state.profilePage.profile,
      status:state.profilePage.status,
  }
}

const withRouter = (Component)=>{
const ComponentWithRouterProp = (props)=> {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return (
      <Component
          {...props}
          router={{ location, navigate, params }}
      />
  );
}

return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps,{setUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(PageContainer)