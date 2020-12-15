import React from "react";
import s from "./Header.module.css";
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";

export type MapPropsType = {}

export const Header: React.FC<MapPropsType> = (props) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }
    const {Header} = Layout

    return (
        <Header className="header">
            <Row>
                <Col span={18}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}>

                        <Menu.Item key="1">
                            <Link to="/developers">
                                Developers
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>


                {isAuth ?
                    <>
                        <Col span={2}>
                            <Avatar style={{backgroundColor: '#87d068'}} icon="user"/>
                        </Col>
                        <Col span={2}>
                            <p className={s.login}>{login}</p>
                        </Col>
                        <Col span={2}>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </Col>
                    </>

                    : <><Col span={4}></Col>
                        <Col span={2}>
                            <Button>
                                <Link to={'/login'}>Login</Link>
                            </Button>
                        </Col>
                    </>}

            </Row>
        </Header>

        // <header className={s.app_header}>
        //     <img
        //         src="https://github.com/PirialMersus/frontend-js/blob/master/menu/img/logo.png?raw=true"
        //         alt="logo"
        //     />
        //     <div className={s.loginBlock}>
        //         {props.isAuth
        //             ? <div className={s.loginBlock_accPlusLogout}><p>{props.login}</p>
        //                 <button onClick={props.logout}>Log out</button>
        //             </div>
        //             : <NavLink to={'/login'}>Login</NavLink>}
        //     </div>
        // </header>
    )
}