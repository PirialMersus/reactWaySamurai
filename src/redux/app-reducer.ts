import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {setMyProfileData} from "./auth-reducer";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
};

let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: ActionType): InitialStateType  => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

type ActionType = InitializedSuccessActionType
type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setMyProfileData());
    promise
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;