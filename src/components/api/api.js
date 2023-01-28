import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY": process.env.SOCIAL_MEDIA_API_KEY
    }

})

export const usersAPI ={
    getUsers(currentPage = 1,pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{
                return response.data;
                })
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`)
        .then(response=>{
            return response.data;
            })
    },
    followUser(id){
        return instance.post(`follow/${id}`)
        .then(response=>{
            return response.data;
            })
    },
    getUserProfile(id){
        return instance.get(`profile/${id}`)
    }
}

export const profileAPI = {
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },

    updateStatus(status){
        return instance.put(`profile/status`,{status})
    },

    saveProfileInfo(profile){
        return instance.put(`profile`,profile)
    },

    savePhoto(imageFile){
        const formData = new FormData()
        formData.append('image', imageFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

}
export const authAPI={
    getAuth(){
        return instance.get(`auth/me`,)
        .then(response=>{
                return response.data;
                })
    },
    login(email, password, rememberMe=false,captcha=null){
        return instance.post('auth/login', {email, password, rememberMe,captcha})
        .then(response =>{
            return response.data
        })
    },
    logout(){
        return instance.delete('auth/login')
        .then(response =>{
            return response.data
        })
    }
}

export const securityAPI={
    getCaptcha(){
        return instance.get('/security/get-captcha-url')
    }
}