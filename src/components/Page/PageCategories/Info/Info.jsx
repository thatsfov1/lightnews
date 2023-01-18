import React from 'react'
import s from './Info.module.css'
import {connect} from "react-redux";

const Info = ({profile}) => {
  return (
    <div className={s.container}>
            <div className={s.title}>
                Info
            </div>
            <div className={s.info_container}>

            </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
      profile: state.profilePage.profile
  }
}


export default connect(mapStateToProps, null)(Info)
