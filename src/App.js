import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import Trending from './components/Trending/Trending';
import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainre';
import GroupsContainer from './components/Groups/GroupContainer';
import MusicContainer from './components/Music/MusicContainer';
import PoliticsContainer from './components/Politics/PoliticsContainer';
import WeatherContainer from './components/Weather/WeatherContainer';
import FriendsContainer from './components/Friends/FriendsContainer';

const App = () => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/groups/*" element={<GroupsContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer  />} />
          <Route path="/friends/*" element={<FriendsContainer />} />
          <Route path="/mygroup/*" element={<Page />} />
          <Route path="/weather/*" element={<WeatherContainer />} />
          <Route path="/politics/*" element={<PoliticsContainer />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/music/*" element={<MusicContainer />} />
        </Routes>
        <Trending />
      </div>
    
  );
}



export default App;
