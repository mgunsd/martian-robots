import React from 'react';
import './MarsGrid.css';

interface MarsGridProps {
  size: number[];
}

export const MarsGrid: React.FC<MarsGridProps> = ({ size }) => {
  let cells = [];
  for (let i = size[1] - 1; i >= 0; i--) {
    for (let j = 0; j < size[0]; j++) {
      cells.push(j + ',' + i);
    }
  }
  return (
    <ul>
      {cells.map((cell) => {
        return (
          <li key={cell}>
            <label>{cell}</label>
          </li>
        );
      })}
    </ul>
  );
};
