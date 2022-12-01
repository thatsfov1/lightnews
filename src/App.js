import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Trending from './components/Trending/Trending';
import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainre';
import GroupsContainer from './components/Groups/GroupContainer';
import MusicContainer from './components/Music/MusicContainer';
import PoliticsContainer from './components/Politics/PoliticsContainer';
import WeatherContainer from './components/Weather/WeatherContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import PageContainer from './components/Page/PageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <Routes>
          <Route path="/groups/*" element={<GroupsContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer  />} />
          <Route path="/friends/" element={<FriendsContainer />} />
          <Route path="/profile/:id?" element={<PageContainer />} />
          <Route path="/profile/*" element={<PageContainer />} />
          <Route path="/group/*" element={<PageContainer />} />
          <Route path="/weather/*" element={<WeatherContainer />} />
          <Route path="/politics/*" element={<PoliticsContainer />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/music/*" element={<MusicContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Trending />
      </div>
    
  );
}



export default App;
