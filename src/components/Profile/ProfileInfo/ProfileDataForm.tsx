import React from "react";
import {createField, GetStringKeyS, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "./../../common/FormsControls/FormsControls.module.css"
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeyS<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> =
    ({handleSubmit, profile, error}) => {

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <b>Full name: </b>{createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
                </div>

                <div><b>Looking for a job </b>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>

                <div><b>My professional skills: </b>
                    {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], TextArea, {type: "checkbox"})}
                </div>

                <div>
                    <b>About me: </b>
                    {createField<ProfileTypeKeys>("About me", "aboutMe", [], TextArea, {type: "checkbox"})}

                </div>


                <div>
                    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: </b>
                        {createField(key, "contacts." + key, [], Input)}
                    </div>
                })}
                </div>

                <div>
                    <button>Save</button>
                </div>

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}

            </form>
        )

    }


const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;