import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {Dispatch} from "redux";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../api/users-api";
import {profileAPI} from "../api/profile-api";

const initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 15},
        {id: 2, message: "Hello, how are you?", likesCount: 45},
        {id: 3, message: "Hello, mersus?", likesCount: 48},
        {id: 4, message: "Hello, pirial?", likesCount: 40},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",

}


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST": {
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case "SN/PROFILE/SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            };
        }
        case "SN/PROFILE/SET_STATUS": {
            return {
                ...state,
                status: action.status
            };
        }
        case "SN/PROFILE/DELETE_POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photos}as ProfileType}
        }

        default:
            return state
    }
}

export const actions = {
    addPostActionCreator: (postText: string) => ({type: "SN/PROFILE/ADD-POST", postText} as const),
    setUserProfile: (profile: ProfileType) => ({type: "SN/PROFILE/SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "SN/PROFILE/SET_STATUS", status} as const),
    deletePost: (postId: number) => ({type: "SN/PROFILE/DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos} as const)
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserInformation = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        if (userId !== null){
            dispatch(getUserInformation(userId))
        } else {
            throw new Error("userId can't be null")
        }

    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>