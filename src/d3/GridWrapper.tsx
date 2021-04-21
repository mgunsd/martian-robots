import React, { useRef, useState, useEffect } from 'react';
import { D3Grid } from './D3Grid';

const GridWrapper = () => {
  const gridArea = useRef<HTMLDivElement>(null);
  //const [grid, setGrid] = useState(null);
  console.log(`gridArea: `, gridArea);

  useEffect(() => {
    if (gridArea.current) {
      D3Grid(gridArea.current);
    }
  }, []);

  return <div className="grid-area" ref={gridArea} />;
};

export default GridWrapper;
