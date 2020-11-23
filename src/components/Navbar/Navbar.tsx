import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";

 export type FriendType = {
    id: number
    name: string
    iconAddress: string
    isFriend: boolean
}

type PropsType = {
    friends: Array<FriendType>

}

const Navbar: React.FC<PropsType> = (props) => {
    let friendsElements = props.friends.map((d) => (
        <FriendsItem name={d.name} id={d.id} path={d.iconAddress} key={d.id}/>
    ));

    return (
        <nav className={s.app_nav}>
            <ul className={s.navList}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>
                        Profile
                    </NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>
                        News
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>
                        Users
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>
                        Settings
                    </NavLink>
                </li>
            </ul>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendsItems}>{friendsElements}</div>
            </div>
        </nav>
    );
}
export default Navbar