// чтобы разделить на 2 файла , использовать видео 11 - react+ TypeScript Путь самур 2.0
import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InitialStateType} from "../../redux/dialogs-reducer";

const maxLength50 = maxLengthCreator(50);



export type NewMessageFormValuesType = {
    newMessageBody: string
}
type NewMessageFormVakuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type AddMessagePropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, AddMessagePropsType> & AddMessagePropsType>
    = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormVakuesKeysType>("Enter your message", "newMessageBody", [required, maxLength50], TextArea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void

}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};
export default Dialogs;