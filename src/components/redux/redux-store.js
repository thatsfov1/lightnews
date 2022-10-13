import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";

let reducers =combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
});

let store = createStore(reducers);

export default store;