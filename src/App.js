import React, { Component } from 'react';
import Welcome from './welcome/Welcome';
import Menu from './menu/Menu';

import './App.css';
import AboutMe from './about-me/AboutMe';
import Skills from './skills/Skills';
import Certifications from './certifications/Certifications';
import Footer from './footer/footer';
import SocialMedia from './social-media/social-media';

class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container" >
        {/* <Menu pageWrapId="page-wrap" outerContainerId="outer-container" /> */}
        <main id="page-wrap" className="main-container">
          <Welcome />
          <AboutMe />
          <Skills />
          <Certifications />
          <Footer />
          <SocialMedia />
        </main>
      </div >
    );
  }
}

export default App;
