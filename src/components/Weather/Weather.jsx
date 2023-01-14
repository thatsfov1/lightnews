import React from "react";
import { useState } from "react";
import Category from "../Categories/Category";
import classes from "./Weather.module.css";

const Weather=(props) => {

    const [weather,setWeather] = useState([

        { id: 1, header: "new", news: "lalala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZh3nyCtrpxxI87BsuGrWbn5baTCyOiINspw&usqp=CAU" },
        { id: 2, header: "neww", news: "lalalal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN3Hpj5AEcRqk8VUzYEqJGdtt4tHa_9seCA&usqp=CAU" },
        { id: 3, header: "newww", news: "lalalala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MhTTIXNR59TztiEVHAS36iP44mR_6-Ql3w&usqp=CAU"},
        { id: 2, header: "neww", news: "lalalal", img: "https://www.popsci.com/uploads/2020/08/10/X7V35SIG6NGSDJPZDUBTVWQAGM.jpg?auto=webp&width=1440&height=1080" },
        { id: 4, header: "newwwww", news: "lalalalal", img: "https://img.freepik.com/premium-vector/outline-weather-icon-set-transparent-forecast-icons-outline-weather-pictogram-collection-cloud-sun-rain-wind-symbol_570901-29.jpg?w=2000" },
        { id: 5, header: "newwwwww", news: "lalalalala", img: "https://img.freepik.com/premium-vector/outline-weather-icon-set-transparent-forecast-icons-outline-weather-pictogram-collection-cloud-sun-rain-wind-symbol_570901-29.jpg?w=2000" }
     

    ])

    let weatherContent = Category(weather)
    return <div className={classes.blockacc}>
        {weatherContent}
    </div>
}

export default Weather;