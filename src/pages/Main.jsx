import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Content from "../components/Content/Content";
import AuthorizationButtons from "../components/AuthorizationButtons/AuthorizationButtons";
import Promo from "../components/Main/Promo/Promo";
import AboutProject from "../components/Main/AboutProject/AboutProject";
import Techs from "../components/Main/Techs/Techs";
import AboutMe from "../components/Main/AboutMe/AboutMe";
import Portfolio from "../components/Main/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

const Main = ({ loggedIn, onPopupNavigation }) => {
  return (
    <div>
      <Header>
        {loggedIn ? (
          <Navigation onPopupNavigation={onPopupNavigation} />
        ) : (
          <AuthorizationButtons />
        )}
      </Header>
      <Content>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
