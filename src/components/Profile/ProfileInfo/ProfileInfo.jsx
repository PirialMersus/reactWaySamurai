import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import facebook from "../../../assets/images/facebook-app-logo.svg";
import website from "../../../assets/images/internet.svg";
import vk from "../../../assets/images/vk.svg";
import twitter from "../../../assets/images/twitter.svg";
import instagram from "../../../assets/images/instagram.svg";
import youtube from "../../../assets/images/youtube.svg";
import github from "../../../assets/images/github.svg";
import arnold from "../../../assets/images/arni.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length)
        {props.savePhoto(e.target.files[0])}
    }

    return (
        <div>
            <div className={s.avaPlusDescription}>
                {props.profile.photos.large ? <img className={s.userPhoto} alt={""} src={props.profile.photos.large}/> :
                    <img className={s.userPhoto} src={arnold} alt="Arni"/>}
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                {props.profile.lookingForAJob && <p>Ищу работу: {props.profile.lookingForAJobDescription}</p>}
            </div>
            <div className={s.socialNetworks}>
                {props.profile.contacts.facebook &&
                <a href={props.profile.contacts.facebook}><img alt={"facebook icon"} className={s.socialIcons}
                                                               src={facebook}/></a>}
                {props.profile.contacts.website &&
                <a href={props.profile.contacts.website}><img alt={"website icon"} className={s.socialIcons}
                                                              src={website}/></a>}
                {props.profile.contacts.vk &&
                <a href={props.profile.contacts.vk}><img alt={"vk icon"} className={s.socialIcons} src={vk}/></a>}
                {props.profile.contacts.twitter &&
                <a href={props.profile.contacts.twitter}><img alt={"twitter icon"} className={s.socialIcons}
                                                              src={twitter}/></a>}
                {props.profile.contacts.instagram &&
                <a href={props.profile.contacts.instagram}><img alt={"instagram icon"} className={s.socialIcons}
                                                                src={instagram}/></a>}
                {props.profile.contacts.youtube &&
                <a href={props.profile.contacts.youtube}><img alt={"youtube icon"} className={s.socialIcons}
                                                              src={youtube}/></a>}
                {props.profile.contacts.github &&
                <a href={props.profile.contacts.github}><img alt={"github icon"} className={s.socialIcons}
                                                             src={github}/></a>}
                {props.profile.contacts.mainLink && <a href={props.profile.contacts.mainLink}>Основная ссылка</a>}
            </div>
        </div>
    );
};
export default ProfileInfo;
