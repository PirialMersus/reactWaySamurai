import React from "react";
import Profile from "./Profile";
import {connect, useSelector} from "react-redux";
import {getStatus, getUserInformation, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import {getIsFetching} from "../../redux/users-selectors";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserInformation: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}


type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

// const ProfileContainer1: React.FC<MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>> = (props) => {
//
//
//     const refreshProfile = () => {
//         let userId = props.match.params.userId
//         if (!userId) {
//             userId  = props.authorizedUserId;
//             if (!userId) {
//                 props.history.push("/login")
//             }
//         }
//         if (!userId) {
//             console.error("ID should exist in URI params or in state('authorixedUserId')")
//         } else {
//             props.getUserInformation(userId as number)
//             props.getStatus(userId as number)
//         }
//     }
//     return (
//         <Profile {...props}
//                  isOwner={!props.match.params.userId}
//                  profile={props.profile}
//                  status={props.status}
//                  updateStatus={props.updateStatus}
//                  savePhoto={props.savePhoto}/>
//     );
// }

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        if (!userId) {
            console.error("ID should exist in URI params or in state('authorixedUserId')")
        } else {
            this.props.getUserInformation(userId as number)
            this.props.getStatus(userId as number)
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        );
    }
};

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserInformation, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer);




