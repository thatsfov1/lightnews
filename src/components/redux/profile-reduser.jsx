import { profileAPI } from "../api/api";

export const updateNewTextPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addNews = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status});

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

export const getStatus  = (id) =>{
   
    return (dispatch) =>{
        profileAPI.getStatus(id)
        .then(response => {
        if(response.data.resultCode === 0){
                dispatch(setUserStatus(response.data))
            }
        })
    }
}

export const updateStatus  = (status) =>{
    return (dispatch) =>{
        profileAPI.updateStatus(status)
        .then(response => {
        if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
}

let initialState = {
    post: [
        { id: 1, message: "News about Spider-Man", likes: 16, reposts: 2 },
        { id: 2, message: "News about Captain America", likes: 15, reposts: 3 }
    ],
    profile: [
        { id: 1, name: "My Group", avatar: "https://cdn.27.ua/sc--media--prod/default/82/13/ed/8213edef-2996-4de1-a9ea-fd07d08d3e21.jpeg" },
    ],
    newPostText: '',
    profile:null,
    status:''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newNews = {
                id: 6,
                message: state.newPostText,
                likes: 0,
                reposts: 0

            }
            let stateCopy = { ...state };
            stateCopy.post = [ ...state.post ]
            stateCopy.post.unshift(newNews);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = { ...state };
                stateCopy.post = [ ...state.post ]
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return{
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;