import React, {ChangeEvent, useState} from "react";
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
import {ContactsType, ProfileType} from "../../../types/types";

// type PropsType = {
//     profile: ProfileType
//
// }

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        //todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={s.avaPlusDescription}>
                {profile.photos.large ? <img className={s.userPhoto} alt={""} src={profile.photos.large}/> :
                    <img className={s.userPhoto} src={arnold} alt="Arni"/>}
                {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}

                {editMode ?
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner}
                                 goToEditMode={() => setEditMode(true)}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>


            </div>

        </div>
    );
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
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
                {profile.lookingForAJobDescription &&
                <div><b>Проф скилы: </b> <span>{profile.lookingForAJobDescription}</span></div>}
                <div className={s.socialNetworks}>
                    <b>Contacts: </b> {Object
                    .keys(profile.contacts)
                    .map(key => {
                        {
                            if (profile.contacts[key as keyof ContactsType]) {
                                return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
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

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><span>{contactTitle}: </span><a href={contactValue}>{contactValue}</a></div>
}


export default ProfileInfo;
