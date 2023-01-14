import { updateObjectInArray } from "../utils/object-helpers";
import {faker} from "@faker-js/faker";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_GROUPS = 'SET_GROUPS';



export const follow = (groupId) => ({ type: FOLLOW, groupId });

export const unfollow = (groupId) => ({ type: UNFOLLOW, groupId });

export const setGroup = (groups) => ({ type: SET_GROUPS, groups });

const initialState = {
    groups: [...Array(6)].map(()=> ({
        id:faker.datatype.uuid(),
        followed:faker.datatype.boolean(),
        name:faker.name.findName(),
        avatar:faker.internet.avatar(),
        email: faker.internet.email(),
        wallpaper:faker.image.abstract()
    }))
}

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return{
                ...state,
                groups: updateObjectInArray(state.groups,'id',action.groupId,{followed:true})
            };
        }
        case UNFOLLOW: {
            return{
                ...state,
                groups: updateObjectInArray(state.groups,'id',action.groupId,{followed:false})
            };
        }
        case SET_GROUPS:{
            return{
                ...state,
                groups:[...state.groups, ...action.users]
            }
        } 
        default:
            return state;
    }
}

export default groupsReducer;