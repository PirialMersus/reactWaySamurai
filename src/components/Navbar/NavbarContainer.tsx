import {connect} from "react-redux";
import Navbar, {FriendType} from "./Navbar";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    friends: FriendType
}


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = () => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;
