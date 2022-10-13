
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: body });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

let initialState = {
    dialogs: [
        {id:1, name: "Sasha", avatar:"https://photoplay.ru/sites/default/files/styles/r-1-1-mobile/public/gallery_images/bez_nazvaniya_2.jpg?itok=neZUWJ7E",message:"Let's go to the park tomorrow"},
        {id:2, name: "Denis", avatar:"https://klike.net/uploads/posts/2020-08/1597994286_2.jpg",message:"Where are you?"},
        {id:3, name: "Sophia", avatar:"https://klike.net/uploads/posts/2019-06/1560149804_1.jpg",message:"bla bla" },
        {id:4, name: "Nazar", avatar:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png",message:"How old r u?" },
        {id:5, name: "Andrey", avatar:"https://ic.pics.livejournal.com/kabzon/7182730/3079824/3079824_600.png",message:"Hi,what is your name?" }
      ],
      newMessageBody: ''
};

const dialogsReducer = (state= initialState, action) => {
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