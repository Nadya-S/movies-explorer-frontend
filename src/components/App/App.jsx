import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Switch, Route, useHistory } from "react-router-dom";
import Auth from "../../utils/Auth";
import MainApi from "../../utils/MainApi";
import Main from "../../pages/Main";
import Movies from "../../pages/Movies";
import SavedMovies from "../../pages/SavedMovies";
import Profile from "../../pages/Profile/Profile";
import ProtectedRoute from "../ProtectedRoute";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound/NotFound";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import PopupEditProfile from "../PopupEditProfile/PopupEditProfile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

const App = () => {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipError, setInfoTooltipError] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const setSuccesReq = () => {
    setInfoTooltipOpen(true);
    setInfoTooltipError("");
    setIsLoading(false);
  };

  const setErrorReq = (err) => {
    setIsLoading(false);
    setInfoTooltipOpen(true);
    setInfoTooltipError(err);
  };

  const auth = (token) => {
    return Auth.getMe(token)
      .then((res) => {
        if (res) {
          return true;
        }
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  const [loggedIn, setLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return auth(token);
    }
  });

  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          setErrorReq(err);
        });
    }
  }, [loggedIn]);

  const handlePopupNavigationClick = () => {
    setIsPopupNavigationOpen(true);
  };

  const handlePopupEditProfileClick = () => {
    setIsPopupEditProfileOpen(true);
  };

  const closePopupNavigation = () => {
    setIsPopupNavigationOpen(false);
  };

  const closePopupEditProfile = () => {
    setIsPopupEditProfileOpen(false);
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
  };

  const handleLogin = (email, password) => {
    return Auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          MainApi.setToken();
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  const handleRegister = (name, email, password) => {
    return Auth.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        history.push("/movies");
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    MainApi.editProfile(name, email)
      .then((newUser) => {
        setSuccesReq();
        setCurrentUser(newUser);
        closePopupEditProfile();
      })
      .catch((err) => {
        setErrorReq(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="app">
          <Switch>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onPopupNavigation={handlePopupNavigationClick}
              setErrorReq={setErrorReq}
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              onPopupNavigation={handlePopupNavigationClick}
              setErrorReq={setErrorReq}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              component={Profile}
              name={currentUser.name}
              email={currentUser.email}
              onPopupEditProfile={handlePopupEditProfileClick}
              onPopupNavigation={handlePopupNavigationClick}
            />
            <Route exact path="/">
              <Main
                loggedIn={loggedIn}
                onPopupNavigation={handlePopupNavigationClick}
              />
            </Route>
            <Route path="/signin">
              <Login onLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Register onRegister={handleRegister} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <PopupNavigation
          isOpen={isPopupNavigationOpen}
          onClose={closePopupNavigation}
        />
        {loggedIn && (
          <PopupEditProfile
            isOpen={isPopupEditProfileOpen}
            onClose={closePopupEditProfile}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
        )}
        <InfoTooltip
          errorMessage={infoTooltipError}
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
