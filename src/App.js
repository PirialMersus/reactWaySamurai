/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";

import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route
                            path="/profile/:userId?"
                            render={() => (
                                <ProfileContainer/>
                            )}
                        />
                        <Route
                            path="/dialogs"
                            render={() => (
                                <DialogsContainer/>
                            )}
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
            </BrowserRouter>
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

