import { combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reduser";
import categoriesReducer from "./categories-reduser";
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";
import groupsReducer from "./groups-reduser";
import profileReducer from "./profile-reduser";

let reducers =combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    groupsPage:groupsReducer,
    friendsPage:friendsReducer,
    otherPage:categoriesReducer,
    auth:authReducer,
});


let store = createStore(reducers);
export default store;