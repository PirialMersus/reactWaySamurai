import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7f79b91b-2e45-4e21-b6d5-aacbccd686ed"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    },
    getUserProfile(userId) {
        console.warn("Obsolete method. Please, use profileAPI object");
        return profileAPI.getUserProfile(userId);
    },
    unfollowUser(userId) {
        return instance
            .delete(`follow/` + userId)
    },
    followUser(userId) {
        return instance
            .post(`follow/` + userId)
    },

}
export const profileAPI = {
    getUserProfile(userId) {
        return instance
            .get(`profile/` + userId)
            .then(responce => responce.data);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    }
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance
            .post('auth/login', {email, password, rememberMe, captcha});
    },
    logout() {
        return instance
            .delete('auth/login');
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get('security/get-captcha-url');
    }
}



