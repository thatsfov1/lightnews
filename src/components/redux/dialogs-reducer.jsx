import {faker} from "@faker-js/faker";

const SEND_MESSAGE = 'dialogs-reducer/SEND_MESSAGE';

export const sendMessage = (message) => ({ type: SEND_MESSAGE, message});

let initialState = {
    messages: [...Array(12)].map(()=> ({
        id:faker.datatype.uuid(),
        fromMe:faker.datatype.boolean(),
        message:faker.lorem.sentence(),
        time:faker.date.recent().toTimeString().slice(0,5)
    })),
  }


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: faker.datatype.uuid(),
                fromMe:true,
                message:action.message,
                time:new Date().toLocaleTimeString().slice(0,5)

            }

            let stateCopy = {...state};
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            return stateCopy;
        default:
            return state;
    }
}

export default dialogsReducer;