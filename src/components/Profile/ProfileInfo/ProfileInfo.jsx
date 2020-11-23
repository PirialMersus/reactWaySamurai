import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
// import facebook from "../../../assets/images/facebook-app-logo.svg";
// import website from "../../../assets/images/internet.svg";
// import vk from "../../../assets/images/vk.svg";
// import twitter from "../../../assets/images/twitter.svg";
// import instagram from "../../../assets/images/instagram.svg";
// import youtube from "../../../assets/images/youtube.svg";
// import github from "../../../assets/images/github.svg";
import arnold from "../../../assets/images/arni.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ProfileType} from "../../../types/types";

// type PropsType = {
//     profile: ProfileType
//
// }

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={s.avaPlusDescription}>
                {props.profile.photos.large ? <img className={s.userPhoto} alt={""} src={props.profile.photos.large}/> :
                    <img className={s.userPhoto} src={arnold} alt="Arni"/>}
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}

                {editMode ?
                    <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner}
                                 goToEditMode={() => setEditMode(true)}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>


            </div>

        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                <b>Full name: </b><span>{profile.fullName}</span>
            </div>
            <div>

                <div>
                    <b>About me: </b><span>{profile.aboutMe}</span>
                </div>
                {profile.lookingForAJob &&
                <div><b>Ищу работу: </b> <span>Да</span></div>}
                {profile.lookingForAJobDescription && <div><b>Проф скилы: </b> <span>{profile.lookingForAJobDescription}</span></div>}
                <div className={s.socialNetworks}>
                    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    {
                        if (profile.contacts[key]) {
                            return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
                        }
                    }
                })}
                </div>
                {isOwner && <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><span>{contactTitle}: </span><a href={contactValue}>{contactValue}</a></div>
}


export default ProfileInfo;
