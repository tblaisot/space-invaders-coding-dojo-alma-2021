import React, { useEffect, useRef } from 'react';
import { Enemies } from './Enemies';
import { Hero } from './Hero';
import { Missiles } from './Missiles';
import { Game } from './models/Game';
import { Score } from './Score';
import './Playground.css';

export const Playground: React.FC<{ game: Game }> = ({ game }) => {

  const thisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thisRef.current) {
      (thisRef.current as any).focus();
    }
  }, []);

  const missiles = [
    ...game.hero.missiles,
    ...game.wave.enemies.flatMap(enemy => enemy.missiles),
  ];
  const enemies = game.wave.enemies;

  return (
    <div className="Game-background"
         onKeyDown={e => game.hero.handleKeyDown(e.key)}
         onKeyUp={e => game.hero.handleKeyUp(e.key)}
         tabIndex={0}
         ref={thisRef}>
      <Hero hero={game.hero}/>
      <Missiles missiles={missiles}/>
      <Enemies enemies={enemies}/>
      <Score score={game.score}/>
    </div>
  );
};
