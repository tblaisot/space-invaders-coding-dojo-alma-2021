import React from 'react';
import './Enemy.css';
import enemy_img from '../assets/enemy.png';
import { Enemy as EnemyModel } from './models/Enemy';


export const Enemy: React.FC<{ enemy: EnemyModel }> = ({enemy}) => {
    return (
        <img className='Game-enemy' src={enemy_img} style={{left: `${enemy.left}px`, top:`${enemy.top}px`}}></img>
    );
};
