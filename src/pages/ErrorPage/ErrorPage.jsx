import React from 'react'
import s from './ErrorPage.module.css'
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/all";

const ErrorPage = () => {
  return (
    <div className={s.container}>
      <span className={s.error_title}>
        404
      </span>
      <div className={s.error_message}>
        <div className={s.error_message_title}>
            There's NOTHING here
        </div>
        <div className={s.error_message_info}>
            ...maybe the page you're looking for is not found or never existed
        </div>
      </div>
      <Link className={s.back} to='/'>Back to Home  <FaLongArrowAltRight/> </Link>
    </div>
  )
}

export default ErrorPage
