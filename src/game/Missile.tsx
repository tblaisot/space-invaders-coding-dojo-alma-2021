import React from 'react';
import './Missile.css';
import missile_img from '../assets/missile1.png'
import { Missile as MissileModel } from './models/Missile';

export const Missile: React.FC<{ missile: MissileModel }> = ({missile}) => {
    return (
        <img src={missile_img} className='Game-missile' style={{left: `${missile.left}px`, top: `${missile.top}px`}}></img>
    );
};
