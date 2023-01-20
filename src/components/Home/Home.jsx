import React from 'react'
import s from './Home.module.css'
import SinglePost from "../Page/PageCategories/About/SinglePost";
import {connect} from "react-redux";
import {faker} from "@faker-js/faker";
import loading from '../../assets/loading.svg'

const Home = () => {

    const post = [...Array(8)].map(()=> ({
        likes:faker.datatype.number({ min: 1, max: 10, precision: 0.1 }),
        comments:faker.datatype.number(100),
        message:faker.lorem.sentences(5),
    }))

    const profile = [...Array(8)].map(()=> ({
        id:faker.datatype.uuid(),
        fullName:faker.finance.accountName,
        avatar:faker.internet.avatar(),
    }))

    const stories = [...Array(7)].map(()=>({
        avatar:faker.internet.avatar(),
        name:faker.internet.userName(),
    }))



  return (
    <div className={s.container}>
      <div className={s.main}>
          <div className={s.stories}>
              {stories.map(st => <div className={s.single_story}>
                  <div className={s.single_story_body}>
                      <img src={st.avatar} className={s.single_story_avatar}/>
                      <div className={s.single_story_name}>{st.name}</div>
                  </div>
              </div>)}
          </div>
          <div className={s.posts_container}>
            <SinglePost post={post} profile={profile}/>
          </div>
          <div className={s.loading}>
           <img src={loading}/>
          </div>
      </div>
        <div className={s.right_side}>
            <div className={s.suggest_friends_container}>

            </div>
            <div className={s.event_container}>

            </div>
            <div className={s.suggest_groups_container}>

            </div>
        </div>
    </div>
  )
}


export default Home
