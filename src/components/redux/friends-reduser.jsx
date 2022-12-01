import { usersAPI } from "../api/api";

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

export const toggleFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching , id });

export const getFriends =(currentPage,pageSize) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setFriend(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}
export const follow  = (id) =>{
    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollowUser(id).then(data => {
                                if (data.resultCode == 0) {
                                    dispatch(unfollowSuccess(id))
                                }
                                dispatch(toggleFollowingProgress(false, id));
                            })
    }
}
export const unfollow  = (id) =>{
    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.followUser(id).then(data => {
                                if (data.resultCode == 0) {
                                    dispatch(followSuccess(id))
                                }
                                dispatch(toggleFollowingProgress(false, id));
                            })
    }
}

let initialState = {
    friends: [],
    pageSize:10,
    totalCount:0,
    currentPage:1,
    isFetching:true,
    followingInProgress:[],

}
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return{
                ...state,
                friends: state.friends.map(fr => {
                    if (fr.id === action.id) {
                        return {
                            ...fr, followed: true
                        }
                    }
                    return fr;
                }
                )
            };
        }
        case UNFOLLOW: {
            return{
                ...state,
                friends: state.friends.map(fr => {
                    if (fr.id === action.id) {
                        return { ...fr, followed: false }
                    }
                    return fr;
                })
            };
        }
        case SET_FRIENDS:{
            return{
                ...state,
                friends:action.friends
            }
        } 
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage:action.currentPage
            }
        } 
        case SET_TOTAL_COUNT:{
            return{
                ...state,
                totalCount:action.totalCount
            }
        } 
        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching:action.isFetching
            }  
    }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state,
                followingInProgress:action.isFetching 
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter(id => id != action.id)
            }
        } 
            default:
            return state;
}
}
export default friendsReducer;