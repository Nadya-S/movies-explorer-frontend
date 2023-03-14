import React from "react";
import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../pages/Main";
import Movies from "../../pages/Movies";
import SavedMovies from "../../pages/SavedMovies";
import Profile from "../../pages/Profile/Profile";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound/NotFound";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import PopupEditProfile from "../PopupEditProfile/PopupEditProfile";

const App = () => {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = useState(false);

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

  return (
    <div className="body">
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies
              onPopupNavigation={handlePopupNavigationClick}
              closePopupNavigation={closePopupNavigation}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              onPopupNavigation={handlePopupNavigationClick}
            />
          </Route>
          <Route path="/profile">
            <Profile
              name="Надежда"
              email="nadinsadov@gmail.com"
              onPopupEditProfile={handlePopupEditProfileClick}
              onPopupNavigation={handlePopupNavigationClick}
            />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <PopupNavigation isOpen={isPopupNavigationOpen} onClose={closePopupNavigation}/>
      <PopupEditProfile isOpen={isPopupEditProfileOpen} onClose={closePopupEditProfile}/>
    </div>
  );
};

export default App;
