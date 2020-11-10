const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "It-Kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "sfsdfsdf"},
        {id: 5, message: "dddfffffddddd"},
    ],
    dialogsData: [
        {id: 1, name: "Artem"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Nikolay"},
        {id: 5, name: "Dimich"},
        {id: 6, name: "Gregorii"},
        {id: 7, name: "Gena"},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = {
                id: 5,
                message: action.newMessageBody,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }

        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});


export default dialogsReducer;