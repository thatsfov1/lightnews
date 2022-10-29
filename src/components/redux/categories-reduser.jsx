let initialState = {
    politics: [
        { id: 1, header: "IMPORTANT", news: "Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. text-overflow работает в том случае, если для блока значение свойства overflow установлено как auto, scroll или hidden.Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента. Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. В CSS3 можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.", img: "https://static3.depositphotos.com/1004325/185/i/600/depositphotos_1853470-stock-photo-news.jpg" },
        { id: 2, header: "VERY IMPORTANT", news: "Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. text-overflow работает в том случае, если для блока значение свойства overflow установлено как auto, scroll или hidden.Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента. Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. В CSS3 можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.", img: "https://st.depositphotos.com/1152339/1972/i/600/depositphotos_19723583-stock-photo-news-concept-news-on-digital.jpg" },
        { id: 3, header: "VERY VERY IMPORTANT", news: "Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. text-overflow работает в том случае, если для блока значение свойства overflow установлено как auto, scroll или hidden.Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента. Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. В CSS3 можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.", img: "https://static8.depositphotos.com/1008504/984/i/600/depositphotos_9843276-stock-photo-the-word-news.jpg" }
      ],
  
      music: [
        { id: 1, header: "news 1", news: "bla", img: "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg" },
        { id: 2, header: "news 2", news: "blabla", img: "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE" },
        { id: 3, header: "news 3", news: "blavlabla", img: "https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=360" },
        { id: 4, header: "news 4", news: "blablablabla", img: "https://rootblog.pl/wp-content/uploads/2021/08/apple-music-logo.jpeg" }
      ],
      weather: [
        { id: 1, header: "new", news: "lalala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZh3nyCtrpxxI87BsuGrWbn5baTCyOiINspw&usqp=CAU" },
        { id: 2, header: "neww", news: "lalalal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN3Hpj5AEcRqk8VUzYEqJGdtt4tHa_9seCA&usqp=CAU" },
        { id: 3, header: "newww", news: "lalalala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MhTTIXNR59TztiEVHAS36iP44mR_6-Ql3w&usqp=CAU"},
        { id: 2, header: "neww", news: "lalalal", img: "https://www.popsci.com/uploads/2020/08/10/X7V35SIG6NGSDJPZDUBTVWQAGM.jpg?auto=webp&width=1440&height=1080" },
        { id: 4, header: "newwwww", news: "lalalalal", img: "https://img.freepik.com/premium-vector/outline-weather-icon-set-transparent-forecast-icons-outline-weather-pictogram-collection-cloud-sun-rain-wind-symbol_570901-29.jpg?w=2000" },
        { id: 5, header: "newwwwww", news: "lalalalala", img: "https://img.freepik.com/premium-vector/outline-weather-icon-set-transparent-forecast-icons-outline-weather-pictogram-collection-cloud-sun-rain-wind-symbol_570901-29.jpg?w=2000" }
      ],
  }

const categoriesReducer = (state = initialState,) => {
   return state;
}

export default categoriesReducer;