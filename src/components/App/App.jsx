import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import SavedMovies from '../../pages/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound/NotFound';
import PopupNavigation from '../PopupNavigation/PopupNavigation';
import PopupEditProfile from '../PopupEditProfile/PopupEditProfile';

const App = () => {
  return (
    <div className='body'>
      <div className='app'>
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route path="/movies"><Movies /></Route>
          <Route path="/saved-movies"><SavedMovies /></Route>
          <Route path="/profile"><Profile name='Надежда' email='nadinsadov@gmail.com'/></Route>
          <Route path="/signin"><Login /></Route>
          <Route path="/signup"><Register /></Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <PopupNavigation />
      <PopupEditProfile />
    </div>
  );
};

export default App;
