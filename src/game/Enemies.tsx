import React from 'react';
import './Enemies.css';
import { Enemy } from './Enemy';
import { Enemy as EnemyModel } from './models/Enemy';

export const Enemies: React.FC<{ enemies: EnemyModel[] }> = ({ enemies }) => {
  return (
    <div className="Game-enemies">
      {
        enemies.map((enemy, index) =>
          (<Enemy enemy={enemy} key={index}/>),
        )
      }
    </div>
  );
};

