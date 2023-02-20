import './App.css';
import React, {Suspense} from 'react';
import {NavbarAccount, NavbarFeeds} from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import GroupsContainer from './pages/Groups/GroupContainer';
import UsersContainer from './pages/Users/UsersContainer';
import PageContainer from './pages/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './pages/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initialize} from './redux/app-reducer';
import Preloader from './common/Preloader';
import About from "./components/ProfileCategories/About/About";
import Info from "./components/ProfileCategories/Info/Info";
import Friends from "./components/ProfileCategories/Friends/Friends";
import Videos from "./components/ProfileCategories/Videos/Videos";
import Home from "./pages/Home/Home";
import EditProfile from "./components/ProfileCategories/EditProfile/EditProfile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


const Settings = React.lazy(() => import('./pages/Settings/Settings'));
const Help = React.lazy(() => import('./pages/Settings/SettingsPages/Help/Help'));
const Address = React.lazy(() => import('./pages/Settings/SettingsPages/Address'));
const Photos = React.lazy(() => import('./components/ProfileCategories/Photos/Photos'));


class App extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (<>
                <HeaderContainer/>
                <div className='app-wrapper'>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <NavbarFeeds/>
                        <NavbarAccount/>
                    </div>
                    <div className='container_pages'>
                        <Suspense fallback={<div
                        style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Preloader/>
                        </div>}>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>
                            <Route path="/groups" element={<GroupsContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/users/" element={<UsersContainer/>}/>
                            <Route path="/edit" element={<EditProfile/>}/>
                            <Route path="/profile/:id/*" element={<PageContainer/>}>
                                <Route index element={<About/>}/>
                                <Route path='info' element={<Info/>}/>
                                <Route path='friends' element={<Friends/>}/>
                                <Route path='photos' element={<Photos/>}/>
                                <Route path='videos' element={<Videos/>}/>
                            </Route>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path='/settings/help' element={<Help/>}/>
                                <Route path='/settings/address' element={<Address/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </Suspense>
                    </div>
                </div>
            </>

    )}
}
    const mapStateToProps =(state)=> {
            return {
                initialized: state.app.initialized,
            }
        }

export default compose(connect(mapStateToProps, {initialize}),)(App);
