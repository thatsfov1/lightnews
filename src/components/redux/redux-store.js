import { combineReducers, legacy_createStore as createStore } from "redux";
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
});

let store = createStore(reducers);

export default store;