import {createField, GetStringKeyS, Input, TextArea} from "../../common/FormsControls/FormsControls";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";

type PropsType = {
}

export type AddPostValuesType = {
    newPostText: string
}

type AddPostValuesTypeKeys = GetStringKeyS<AddPostValuesType>

const AddNewPostForm: React.FC<InjectedFormProps<AddPostValuesType, PropsType> & PropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostValuesTypeKeys>("Your post", "newPostText", [required], Input)}
                {/*<Field component={TextArea}*/}
                {/*       name="newPostText"*/}
                {/*       validate={[required]}*/}
                {/*       placeholder={"Post message"}*/}
                {/*/>*/}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostValuesType, PropsType>({form: 'AddNewPostForm'})(AddNewPostForm)
// const AddNewPostFormWrapper = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);
