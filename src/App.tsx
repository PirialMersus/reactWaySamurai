/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "antd/dist/antd.css";

import "./App.css";

import {BrowserRouter, Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";
import {Avatar, Breadcrumb, Col, Icon, Layout, Menu, Row} from 'antd';
import {UsersPage} from "./components/Users/UsersContainer";
import {LoginPage} from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import s from "./components/Navbar/Navbar.module.css";
import { Header } from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert(e.reason.message);
    }

    componentDidMount() {

        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <BrowserRouter>
                <Layout>
                    <Header/>
                    {/*<Header className="header">*/}
                    {/*    <Row>*/}
                    {/*        <Col span={20}>*/}
                    {/*            <Menu*/}
                    {/*                theme="dark"*/}
                    {/*                mode="horizontal"*/}
                    {/*                defaultSelectedKeys={['2']}*/}
                    {/*                style={{lineHeight: '64px'}}>*/}

                    {/*                <Menu.Item key="1">*/}
                    {/*                    <Link to="/developers">*/}
                    {/*                        Developers*/}
                    {/*                    </Link>*/}
                    {/*                </Menu.Item>*/}
                    {/*            </Menu>*/}
                    {/*        </Col>*/}
                    {/*        <Col span={4}>*/}
                    {/*            <Avatar style={{backgroundColor: '#87d068'}} icon="user"/>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Header>*/}
                    <Content style={{padding: '0 50px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{padding: '24px 0', background: '#fff'}}>
                            <Sider width={200} style={{background: '#fff'}}>
                                <Menu
                                    mode="inline"
                                    // defaultSelectedKeys={['1']}
                                    // defaultOpenKeys={['sub1']}
                                    style={{height: '100%'}}
                                >
                                    {/*<ul className={s.navList}>*/}
                                    {/*    <li className={s.item}>*/}
                                    {/*        <Link to="/profile">*/}
                                    {/*            Profile*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*    <li className={`${s.item} ${s.active}`}>*/}
                                    {/*        <Link to="/dialogs">*/}
                                    {/*            Messages*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*    <li className={s.item}>*/}
                                    {/*        <Link to="/news">*/}
                                    {/*            News*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*    <li className={s.item}>*/}
                                    {/*        <Link to="/music">*/}
                                    {/*            Music*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*    <li className={s.item}>*/}
                                    {/*        <Link to="/users">*/}
                                    {/*            Users*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*    <li className={s.item}>*/}
                                    {/*        <Link to="/settings">*/}
                                    {/*            Settings*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}

                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user"/>
                                                My profile
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="1">
                                            <NavLink to="/profile" activeClassName={s.activeLink}>
                                                Profile
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <NavLink to="/dialogs" activeClassName={s.activeLink}>
                                                Messages
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <NavLink to="/news" activeClassName={s.activeLink}>
                                                News
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <NavLink to="/music" activeClassName={s.activeLink}>
                                                Music
                                            </NavLink>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="laptop"/>
                                                Developers
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="5">
                                            <Link to="/developers">
                                                Developers
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        title={
                                            <span>
                                              <Icon type="notification"/>
                                              subnav 3
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{padding: '0 24px', minHeight: 280}}>
                                <Switch>
                                    <Route
                                        exact path="/"
                                        render={() => <Redirect to={"/profile"}/>}
                                    />
                                    <Route
                                        path="/profile/:userId?"
                                        render={() => <SuspendedProfile/>}
                                    />
                                    <Route
                                        path="/dialogs"
                                        render={() => <SuspendedDialogs/>}
                                    />
                                    <Route
                                        path="/developers"
                                        render={() => (
                                            <UsersPage pageTitle={"Samurai"}/>
                                        )}
                                    />
                                    <Route
                                        path="/login"
                                        render={() => (
                                            <LoginPage/>
                                        )}
                                    />
                                    <Route path="/settings" render={() => <Settings/>}/>
                                    <Route path="/news" render={() => <News/>}/>
                                    <Route path="/music" render={() =>
                                        <div>Music</div>
                                        // <Music/>}
                                    }/>
                                    <Route path="*" render={() => <div>404 NOT FOUND
                                    </div>}/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer
                        style={{textAlign: 'center'}}>Developers Social Network ©2020 Created by G Fesenko</Footer>
                </Layout>
                {/*<div className="app-wrapper">*/}
                {/*    <HeaderContainer/>*/}
                {/*    <NavbarContainer/>*/}
                {/*    <div className="app-wrapper-content">*/}
                {/*        <Switch>*/}
                {/*            <Route*/}
                {/*                exact path="/"*/}
                {/*                render={() => <Redirect to={"/profile"}/>}*/}
                {/*            />*/}
                {/*            <Route*/}
                {/*                path="/profile/:userId?"*/}
                {/*                render={() => <SuspendedProfile />}*/}
                {/*            />*/}
                {/*            <Route*/}
                {/*                path="/dialogs"*/}
                {/*                render={() => <SuspendedDialogs />}*/}
                {/*            />*/}
                {/*            <Route*/}
                {/*                path="/users"*/}
                {/*                render={() => (*/}
                {/*                    <UsersPage pageTitle={"Samurai"}/>*/}
                {/*                )}*/}
                {/*            />*/}
                {/*            <Route*/}
                {/*                path="/login"*/}
                {/*                render={() => (*/}
                {/*                    <LoginPage />*/}
                {/*                )}*/}
                {/*            />*/}
                {/*            <Route path="/settings" render={() => <Settings/>}/>*/}
                {/*            <Route path="/news" render={() => <News/>}/>*/}
                {/*            <Route path="/music" render={() =>*/}
                {/*                <div>Music</div>*/}
                {/*                // <Music/>}*/}
                {/*            }/>*/}
                {/*            <Route path="*" render={() => <div>404 NOT FOUND*/}
                {/*                </div>}/>*/}
                {/*        </Switch>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </BrowserRouter>
        )
            ;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

export const SamuraiJsApp: React.FC = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

