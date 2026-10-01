import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Services from "./services/Services";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import SpaceBackground from "../components/spaceBackground/SpaceBackground";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import "../themeOverrides.scss";

const Main = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "space-app dark-mode" : "space-app light-orbit"}>
      <StyleProvider value={{isDark, changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <SpaceBackground />
            <div className="space-layer">
              <Header />
              <Greeting />
              <About />
              <Services />
              <Skills />
              <Education />
              <WorkExperience />
              <StartupProject />
              <Profile />
              <Footer />
              <ScrollToTopButton />
            </div>
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
