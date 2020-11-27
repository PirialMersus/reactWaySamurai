import {instance} from "./api";

type GetCaptchaUrlResonceType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<GetCaptchaUrlResonceType>('security/get-captcha-url')
            .then(res => res.data)
    }
}