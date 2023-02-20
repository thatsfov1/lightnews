import { authSuccess } from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

let initialState = {
    initialized: false
}

export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(authSuccess())
        Promise.all([promise]).then(()=>{
            dispatch(initializedSuccess())
        })
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

export default appReducer;