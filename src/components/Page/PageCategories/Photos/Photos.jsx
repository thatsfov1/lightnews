import React from 'react'
import s from './Photos.module.css'
import {IoMdAdd} from "react-icons/all";
import {faker} from "@faker-js/faker";
import BasicModal from "./Modal";

const Photos = () => {

  return (
    <div className={s.container}>
      <div className={s.header}>
          <b>All photo's</b>
          <div className={s.add_container}>
              <IoMdAdd size={15} className={s.add_icon}/>
              <span className={s.add_title}>Add photo</span>
          </div>
      </div>
        <div className={s.photos_container}>
            {[...Array(16)].map(() => <BasicModal>
                <img src={faker.image.abstract()}/>
            </BasicModal> ) }
        </div>
    </div>
  )
}

export default Photos
