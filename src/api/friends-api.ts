import {GetItemsType, instance, APIResponseType} from "./api"

export const friendsAPI = {
    getFriends( currentPage = 1, pageSize = 9) {
        return instance
            .get<GetItemsType>(`users?page=${currentPage}&users?friend=true&count=${pageSize}`)
            .then(res => res.data);
    }
}