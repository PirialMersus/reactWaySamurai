import axios from "axios";
import {ProfileType} from "../types/types";
import {strict} from "assert";

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
    getUserProfile(userId: number) {
        console.warn("Obsolete method. Please, use profileAPI object");
        return profileAPI.getUserProfile(userId);
    },
    unfollowUser(userId: number) {
        return instance
            .delete(`follow/` + userId)
    },
    followUser(userId: number) {
        return instance
            .post(`follow/` + userId)
    },

}
export const profileAPI = {
    getUserProfile(userId: number) {
        return instance
            .get(`profile/` + userId)
            .then(responce => responce.data);
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData;
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile);
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeForCaptcha | ResultCodesEnum
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance
            .get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha})
            .then(res => res.data)
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



