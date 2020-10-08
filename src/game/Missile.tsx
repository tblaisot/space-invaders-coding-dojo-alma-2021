import React from 'react';
import missile_img from '../assets/missile1.png';
import './Missile.css';
import { Missile as MissileModel } from './models/Missile';

export const Missile: React.FC<{ missile: MissileModel }> = ({ missile }) => {
  return (
    <img className='Game-missile'
         src={missile_img}
         alt="Missile"
         style={{ left: `${missile.left}px`, top: `${missile.top}px` }}></img>
  );
};
