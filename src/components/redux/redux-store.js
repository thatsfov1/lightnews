import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reduser";
import categoriesReducer from "./categories-reduser";
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";
import groupsReducer from "./groups-reduser";
import profileReducer from "./profile-reduser";
import thunkMiddleware from "redux-thunk"

let reducers =combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    groupsPage:groupsReducer,
    friendsPage:friendsReducer,
    otherPage:categoriesReducer,
    auth:authReducer,
});


let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;