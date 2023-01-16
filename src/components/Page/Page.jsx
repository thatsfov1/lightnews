import s from './Page.module.css';
import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Page = ({profile, status, saveChangesProfile,
                savePhoto, updateStatus, id}) => {

  return <div className={s.content}>
    <div className={s.info}>
      <ProfileInfo profile={profile} id={id}
                   savePhoto ={savePhoto} status={status}
                   updateStatus={updateStatus} saveChangesProfile={saveChangesProfile}
      />
       </div>



    
  </div>;
}

export default Page;