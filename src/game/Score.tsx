import React from 'react';
import './Score.css';

export const Score: React.FC<{ score: number }> = ({ score }) => {
  return (
    <p className="Score">{score}</p>
  );
};
