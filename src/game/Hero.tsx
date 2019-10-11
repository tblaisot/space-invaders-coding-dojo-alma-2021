import React from 'react';
import './Hero.css';
import hero_img from '../assets/hero.png';
import { Hero as HeroModel } from './models/Hero';

export const Hero: React.FC<{ hero: HeroModel }> = ({hero}) => {
    return (
        <img src={hero_img} className="Game-hero"
             style={{left: `${hero.left}px`, top: `${hero.top}px`}}/>
    );
};
