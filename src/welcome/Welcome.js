import React from 'react'
import Hero from '../assets/imgs/hero.png';
import MyAvatar from '../assets/imgs/myAvatar.svg';

import './Welcome.css';

const Welcome = () => (
    <div className="welcome-container">
        <p className="title">Desenvolvedor Front End</p>
        <p className="description">
            Sou apaixonado por desenvolvimento e atualmente trabalho na criação de aplicativo Web e Mobile.
        </p>
        <img className="avatar-img" src={MyAvatar} alt="avatar" />
        <img className="hero-img" src={Hero} alt="hero-img" />
    </div>
)

export default Welcome;