
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";






let store = {
  _state: {


    group: [
    ],

    profile: [
      { id: 1, name: "My Group", avatar: "https://cdn.27.ua/sc--media--prod/default/82/13/ed/8213edef-2996-4de1-a9ea-fd07d08d3e21.jpeg" },
    ],
    profilePage: {
      post: [
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
      ],
      newMessageBody: ''
    },


    politics: [
    
  _callSubscriber() {
    console.log("State changed")
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state);
  }

}





export default store;
window.store = store;