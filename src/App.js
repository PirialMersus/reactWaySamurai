/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import "antd/dist/antd.css";
// import { StepForwardOutlined } from '@ant-design/icons';
// import { Button } from 'antd';

import "./App.css";

import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    catchAllUnhandledErrors = (reason) => {
        // debugger
        alert(reason.reason.message);
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
            <HashRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route
                                exact path="/"
                                render={() => <Redirect to={"/profile"}/>}
                            />
                            <Route
                                path="/profile/:userId?"
                                render={withSuspense(ProfileContainer)}
                            />
                            <Route
                                path="/dialogs"
                                render={withSuspense(DialogsContainer)}
                            />
                            <Route
                                path="/users"
                                render={() => (
                                    <UsersContainer pageTitle={"Samurai"}/>
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
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="*" render={() => <div>404 NOT FOUND
                                {/*<Button>Ok</Button>*/}
                                {/*<StepForwardOutlined />*/}
                                </div>}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

export const SamuraiJsApp = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

