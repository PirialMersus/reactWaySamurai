import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.app_header}>
            <img
                src="https://github.com/PirialMersus/frontend-js/blob/master/menu/img/logo.png?raw=true"
                alt="logo"
            />
            <div className={s.loginBlock}>
                {props.isAuth ? <div className={s.loginBlock_accPlusLogout}><p>{props.login}</p>
                    <button onClick={props.logout}>Log out</button>
                </div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
};
export default Header;
