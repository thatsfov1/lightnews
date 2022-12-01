import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY": '9d1c0c6c-9790-4cda-ac63-f2987eadef69'
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
}

export const profileAPI = {
    getStatus(id){
        return instance.get(`profile/status/${id}`)
        
    },

    updateStatus(status){
        return instance.put(`profile/status/`,{status})
    },
}
export const authAPI={
    getAuth(){
        return instance.get(`auth/me`,)
        .then(response=>{
                return response.data;
                })
    },
}
