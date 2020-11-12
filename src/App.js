/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";

import {HashRouter, Route} from "react-router-dom";
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
    componentDidMount() {
        this.props.initializeApp();
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
                                <UsersContainer/>
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

export const SamuraiJsApp = (props) => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

