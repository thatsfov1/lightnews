import {faker} from "@faker-js/faker";

const DELETE_SUGGEST_FRIEND = 'home-reducer/DELETE_SUGGEST_FRIEND'
const ADD_EVENT = 'home-reducer/ADD_EVENT'

export const deleteSuggestFriend = (id) => ({ type:DELETE_SUGGEST_FRIEND, id })
export const addEvent = (title,message,month,day) => ({ type:ADD_EVENT, payload:{title,message,month,day} })

const initialState = {
    suggestFriends: [...Array(3)].map(()=>({
        id:faker.datatype.uuid(),
        fullName:faker.internet.userName(),
        avatar:faker.internet.avatar(),
        mutual:faker.datatype.number({ min: 3, max: 20})
    })),
    post: [...Array(8)].map(()=> ({
        likes:faker.datatype.number({ min: 1, max: 10, precision: 0.1 }),
        comments:faker.datatype.number({ min: 3, max: 20}),
        message:faker.lorem.sentences(5),
    })),
    profile: [...Array(8)].map(()=> ({
        id:faker.datatype.uuid(),
        fullName:faker.internet.userName(),
        avatar:faker.internet.avatar(),
    })),
    stories: [...Array(10)].map(()=>({
        avatar:faker.internet.avatar(),
        name:faker.internet.userName(),
    })),
    events: [...Array(4)].map(()=> ({
        id:faker.datatype.uuid(),
        month:faker.date.month({ abbr: true }),
        day:faker.datatype.number({ min: 1, max: 28}),
        title:'Meeting',
        message:'Meeting with partners',
        completed:false
    }))
}


const homeReducer = (state = initialState,action) => {
    switch (action.type){
        case DELETE_SUGGEST_FRIEND:
            return{
                ...state, suggestFriends: state.suggestFriends.filter(p => p.id !== action.id)
        }
        case ADD_EVENT:
            const newEvent = {
                id: faker.datatype.uuid(),
                title:action.payload.title,
                message:action.payload.message,
                month:action.payload.month,
                day:action.payload.day,
            }
            const stateCopy = {...state};
            stateCopy.events = [...state.events]
            stateCopy.events.unshift(newEvent);
            return stateCopy
        default:
            return state
    }
}

export default homeReducer