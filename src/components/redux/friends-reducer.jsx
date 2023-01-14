import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



export const followSuccess = (id) => ({ type: FOLLOW, id });

export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id });

export const setFriend = (friends) => ({ type: SET_FRIENDS, friends });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id });

export const requestFriends = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setFriend(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}


const followUnfollow =async(id,dispatch,apiMethod,actionCreator)=>{
    dispatch(toggleFollowingProgress(true, id));
    const data = await apiMethod(id)
        if (data.resultCode === 0) {
            dispatch(actionCreator(id))
        }
        dispatch(toggleFollowingProgress(false, id));
}


export const follow = (id) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.unfollowUser.bind(usersAPI);
        const actionCreator = unfollowSuccess;
        followUnfollow(id,dispatch,apiMethod,actionCreator)
    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.followUser.bind(usersAPI);
        const actionCreator = followSuccess;
        followUnfollow(id,dispatch,apiMethod,actionCreator)
    }
}

let initialState = {
    friends: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                friends: updateObjectInArray(state.friends,'id',action.id,{followed:true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                friends: updateObjectInArray(state.friends,'id',action.id,{followed:false})
            };
        }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: action.friends
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}
export default friendsReducer;