
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';



export const followAC = (friendId) => ({ type: FOLLOW, friendId });

export const unfollowAC = (friendId) => ({ type: UNFOLLOW, friendId });

export const setFriendsAC = (friends) => ({ type: SET_FRIENDS, friends });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

let initialState = {
    friends: [],
    pageSize:5,
    totalCount:0,
    currentPage:1
}
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return{
                ...state,
                friends: state.friends.map(fr => {
                    if (fr.id === action.friendId) {
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
                    if (fr.id === action.friendId) {
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
        default:
            return state;
    }
}

export default friendsReducer;