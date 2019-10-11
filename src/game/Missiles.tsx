import React from 'react';
import './Missiles.css';
import { Missile as MissileModel } from './models/Missile';
import { Missile } from './Missile';

export const Missiles: React.FC<{ missiles: MissileModel[] }> = ({missiles}) => {
    return (
        <div className="Game-missiles">
            {
                missiles.map((missile, index) =>
                    (<Missile missile={missile} key={index}/>)
                )
            }
        </div>
    );
};
