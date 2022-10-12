
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: body });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });



const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageBody,

            }
            state.newMessageBody = '';
            state.dialogs.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            {

                state.newMessageBody = action.newMessage;
                return state;
            }

        default:
            return state;
    }
}

export default dialogsReducer;