import React from "react";
import s from "./FriendsItem.module.css";
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;
    return (
        <div className={s.friend}>
            <NavLink to={path} activeClassName={s.activeLink}>
                <img src={props.path} alt=""/>
                <p className={s.friendName}>{props.name}</p>
            </NavLink>
        </div>
    );
};

export default FriendsItem;
