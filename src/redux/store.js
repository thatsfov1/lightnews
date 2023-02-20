import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import groupsReducer from "./groups-reducer";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-reducer";
import homeReducer from "./home-reducer";

let reducers =combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    groupsPage:groupsReducer,
    friendsPage:friendsReducer,
    auth:authReducer,
    app:appReducer,
    homePage:homeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;