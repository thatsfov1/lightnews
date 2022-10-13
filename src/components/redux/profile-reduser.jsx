export const updateNewTextPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addNewsActionCreator = () => ({ type: ADD_POST });

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    post: [
        { id: 1, message: "News about Spider-Man", likes: 16, reposts: 2 },
        { id: 2, message: "News about Captain America", likes: 15, reposts: 3 }
      ],
      newPostText: ''
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newNews = {
                id: 6,
                message: state.newPostText,
                likes: 0,
                reposts: 0

            }
            state.post.push(newNews);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            {

                state.newPostText = action.newText;
                return state;
            }
            default:
            return state;
    }
}

    export default profileReducer;