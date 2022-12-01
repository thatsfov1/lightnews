import { authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';


export const setAuthUserData = (id,login,email) => ({ type: SET_USER_DATA, data:{id,login,email} });

let initialState = {
    id:null,
    login:null,
    email:null,
    isAuth:false,
}
export const authSuccess  = () =>{
    return (dispatch) =>{
        authAPI.getAuth()
        .then(data => {

        if(data.resultCode === 0){
                let {email,id,login} = data.data;
                dispatch(setAuthUserData(id,login,email))
            }
            
        })
    }
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return{
                ...state,
                 ...action.data,
                 isAuth:true
            }
        } 
        default:
            return state;
    }
}

export default authReducer;