export const getFriends = (state) =>{
    return state.friendsPage.friends
}

export const getPageSize = (state) =>{
    return state.friendsPage.pageSize
}

export const getTotalCount = (state) =>{
    return state.friendsPage.totalCount
}

export const getCurrentPage = (state) =>{
    return state.friendsPage.currentPage
}

export const getIsFetching = (state) =>{
    return state.friendsPage.isFetching
}

export const getFollowingInProgress = (state) =>{
    return state.friendsPage.followingInProgress
}