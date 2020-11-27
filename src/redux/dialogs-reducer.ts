import {strict} from "assert";
import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number;
    name: string;
};
type MessageType = {
    id: number;
    message: string;
};

const initialState = {
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "It-Kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "sfsdfsdf"},
        {id: 5, message: "dddfffffddddd"},
    ] as Array<MessageType>,
    dialogsData: [
        {id: 1, name: "Artem"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Nikolay"},
        {id: 5, name: "Dimich"},
        {id: 6, name: "Gregorii"},
        {id: 7, name: "Gena"},
    ] as Array<DialogType>,
};


const dialogsReducer = (
    state = initialState,
    action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/ADD-MESSAGE": {
            let newMessage = {
                id: 5,
                message: action.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state
    }
}

export const actions = {
    addMessageActionCreator: (newMessageBody: string) => ({type: "SN/DIALOGS/ADD-MESSAGE", newMessageBody} as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
