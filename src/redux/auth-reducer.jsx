import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


export const setAuthUserData = (id,login,email,isAuth) => ({ type: SET_USER_DATA, payload:{id,login,email,isAuth} });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl} });

let initialState = {
    id:null,
    login:null,
    email:null,
    isAuth:false,
    captchaUrl:null
}

export const authSuccess  = () => async (dispatch) =>{
        let data = await authAPI.getAuth()
        if(data.resultCode === 0){
                let {email,id,login} = data.data;
                dispatch(setAuthUserData(id,login,email,true))
            }
    }
export const login  = (email, password, rememberMe,setStatus,captcha) => async (dispatch) =>{
        const data = await authAPI.login(email, password, rememberMe,captcha)
        if(data.resultCode === 0){
                dispatch(authSuccess())
            } else{
                if(data.resultCode === 10){
                    dispatch(getCaptcha())
                }
                setStatus(data.messages)
            }
    }

export const logout = () => async (dispatch) =>{
       const data = await authAPI.logout()
        if(data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false))
            }
    }
export const getCaptcha = () => async (dispatch) =>{
       const response = await securityAPI.getCaptcha()
       const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
        {
            return{
                ...state,
                 ...action.payload,
            }
        } 
        default:
            return state;
    }
}

export default authReducer;