import React from 'react';
import hero_img from '../assets/hero.png';
import './Hero.css';
import { Hero as HeroModel } from './models/Hero';

export const Hero: React.FC<{ hero: HeroModel }> = ({ hero }) => {
  return (
    <img className="Game-hero"
         src={hero_img}
         alt="Hero"
         style={{ left: `${hero.left}px`, top: `${hero.top}px` }}/>
  );
};
