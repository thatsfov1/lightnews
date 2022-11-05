
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



export const follow = (friendId) => ({ type: FOLLOW, friendId });

export const unfollow = (friendId) => ({ type: UNFOLLOW, friendId });

export const setFriend = (friends) => ({ type: SET_FRIENDS, friends });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

let initialState = {
    friends: [],
    pageSize:10,
    totalCount:0,
    currentPage:1,
    isFetching:true
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
        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching:action.isFetching
            }
        } 
        default:
            return state;
    }
}

export default friendsReducer;