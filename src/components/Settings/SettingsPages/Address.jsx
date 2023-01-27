import React from 'react'
import s from '../Settings.module.css'
import {BsArrowLeft} from "react-icons/all";
import {useNavigate} from "react-router-dom";

const Address = () => {

  const navigate = useNavigate()

  return (
    <div className={s.address_container}>
      <div className={s.address_header}>
        <span className={s.arrow} onClick={() => navigate(-1)}>
          <BsArrowLeft/>
        </span>
        <span>
          Contact Information
        </span>
      </div>
      <div className={s.adresses_container}>
        <div className={s.single_address}>
          <div className={s.single_address_title}>
            Country
          </div>
          <div className={s.single_address_info}>
            England
          </div>
        </div>
        <div className={s.single_address}>
          <div className={s.single_address_title}>
            City
          </div>
          <div className={s.single_address_info}>
            London
          </div>
        </div>
        <div className={s.single_address}>
          <div className={s.single_address_title}>
            Address
          </div>
          <div className={s.single_address_info}>
            221B Baker Street
          </div>
        </div>
        <div className={s.single_address}>
          <div className={s.single_address_title}>
            Postcode
          </div>
          <div className={s.single_address_info}>
            NW1 6XE
          </div>
        </div>
      </div>
        <div className={s.address_map}>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe width="100%" height="395" id="gmap_canvas"
                  src="https://maps.google.com/maps?q=221b%20Baker%20Street%20,%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
          </iframe>
        </div>
    </div>
  )
}

export default Address
