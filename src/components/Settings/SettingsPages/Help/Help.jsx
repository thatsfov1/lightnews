import React from 'react'
import s from "../../Settings.module.css";
import {AiOutlineSearch, BsArrowLeft} from "react-icons/all";
import {useNavigate} from "react-router-dom";
import ControlledAccordions from "./HelpAccordions";
import {faker} from "@faker-js/faker";


const Help = () => {

    const navigate = useNavigate()

  return (
    <div className={s.help_container}>
        <div className={s.banner}>
            <div className={s.banner_title}>
                <div>
                    Welcome!
                </div>
                We hope our help will be useful
            </div>
            <div className={s.banner_info}>
                {faker.lorem.paragraph()}
            </div>
            <span className={s.banner_input_container}>
                <AiOutlineSearch size={30} className={s.banner_input_icon}/>
                <input type='text' placeholder='Search...' className={s.banner_input}/>
                <button className={s.banner_button}>Search</button>
            </span>
        </div>
            <div>
                <ControlledAccordions/>
            </div>
    </div>
  )
}

export default Help
