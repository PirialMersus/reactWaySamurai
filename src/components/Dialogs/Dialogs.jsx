import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {reduxForm, Field} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                component={TextArea}
                validate={[required, maxLength50]}
                name="newMessageBody"
                placeholder="Enter your message"
            /></div>
            <div>
                <button>Sent</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogsData.map((d) => (
        <DialogItem key={Math.random()} name={d.name} id={d.id}/>
    ));

    const messageElements = [];

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    props.dialogsPage.messages.map((m) =>
        messageElements.push(<Message key={Math.random()} message={m.message}/>)
    );


    if (!props.isAuth) {
        return <Redirect to={"/login"}/>

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage}
                                  onSubmit={addNewMessage} dialogsPage={props.dialogsPage}/>
            </div>
        </div>
    );
};
export default Dialogs;