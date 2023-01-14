import './App.css';
import React, {Suspense} from 'react';
import {NavbarAccount, NavbarFeeds, NavbarPages} from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import GroupsContainer from './components/Groups/GroupContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import PageContainer from './components/Page/PageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import CreateProfile from './components/CreateProfile/CreateProfile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialize } from './components/redux/app-reducer';
import Preloader from './components/common/Preloader';
const Weather = React.lazy(() => import('./components/Weather/Weather'));
const Politics = React.lazy(() => import('./components/Politics/Politics'));
const Music = React.lazy(() => import('./components/Music/Music'));


class App extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {

        if(!this.props.initialized){
           return <Preloader/>
        }
        return (

            <>
                <HeaderContainer/>
                <div className='app-wrapper'>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <NavbarFeeds/>
                        <NavbarPages/>
                        <NavbarAccount/>
                    </div>
                    <div className='container'><Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/groups/*" element={<GroupsContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/friends/" element={<FriendsContainer/>}/>
                            <Route path="/profile/:id" element={<PageContainer/>}/>
                            <Route path="/profile" element={<PageContainer/>}/>
                            <Route path="/weather/*" element={<Weather/>}/>
                            <Route path="/politics/*" element={<Politics/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                            <Route path="/music/*" element={<Music/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/createprofile" element={<CreateProfile/>}/>
                        </Routes>
                    </Suspense></div>
                </div>
            </>

        );
    }
}


const mapStateToProps =(state)=>{

  return {
    initialized:state.app.initialized,

  }
}

export default compose(
  connect(mapStateToProps,{initialize}),
)(App);
