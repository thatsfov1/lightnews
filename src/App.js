import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import Trending from './components/Trending/Trending';
import Groups from './components/Groups/Groups';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather/Weather';
import Politics from './components/Politics/Politics';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainre';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/groups/*" element={<Groups info={props.state.info} group={props.state.group} />} />
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          <Route path="/mygroup/*" element={<Page store={props.store}/>} />
          <Route path="/weather/*" element={<Weather weather={props.state.weather} />} />
          <Route path="/politics/*" element={<Politics politics={props.state.politics} />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/music/*" element={<Music music={props.state.music} />} />
        </Routes>
        <Trending />
      </div>
    </BrowserRouter>
  );
}



export default App;
