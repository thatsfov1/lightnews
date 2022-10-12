export const updateNewTextPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addNewsActionCreator = () => ({ type: ADD_POST });

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


const profileReducer = (state, action) => {
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