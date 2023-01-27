import {profileAPI, usersAPI} from "../api/api";
import {faker} from "@faker-js/faker";

export const addPost = (postMessage) => ({ type: ADD_POST, postMessage });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status});
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos});

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_PHOTO = 'profile_reducer/SET_PHOTO'

export const getStatus  = (id) => async (dispatch) =>{
      const response =  await profileAPI.getStatus(id)
                dispatch(setUserStatus(response.data))
    }

export const updateStatus  = (status) =>{
    return async (dispatch) =>{
        const response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
    }
}
export const userProfile = (id) => async (dispatch) => {
        const response = await usersAPI.getUserProfile(id)
            dispatch(setUserProfile(response.data))
    }
export const savePhoto = (file) => async (dispatch) => {
        const response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))
    }
}
export const saveChangesProfile = (profile) => async (dispatch,getState) => {
    const id = getState().auth.id
        const response = await profileAPI.saveProfileInfo(profile)
    if(response.data.resultCode === 0) {
        dispatch(userProfile(id))
    }
}


let initialState = {
    post: [...Array(6)].map(()=> ({
        id:faker.datatype.uuid(),
        likes:faker.datatype.number({ min: 1, max: 10, precision: 0.1 }),
        comments:faker.datatype.number(100),
        message:faker.lorem.sentences(5),
    })),
    profile:null,
    status:'',
    notifications:null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let addPost = {
                id: faker.datatype.uuid(),
                message: action.postMessage,
                likes: 0,
                comments: 0,
            }
            let stateCopy = { ...state };
            stateCopy.post = [ ...state.post ]
            stateCopy.post.unshift(addPost);
            stateCopy.newPostText = '';
            return stateCopy;
            
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
        case SET_PHOTO:
            return{
                ...state,
                profile: {...state.profile, photos:action.photos}
            }
        default:
            return state;
    }
}

export default profileReducer;