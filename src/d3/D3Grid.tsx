import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';
//import data from 'store/data.json';
export interface dataType {
  x: number;
  y: number;
}
console.log(`data: `, data);
const MARGIN = { TOP: 10, BOTTOM: 80, LEFT: 70, RIGHT: 10 };
const WIDTH = 700 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 700 - MARGIN.TOP - MARGIN.BOTTOM;

const d = [1, 2, 3, 4];
export const D3Grid = (element: HTMLElement) => {
  console.log(`props: `, element);
  console.log(`selected: `, d3.select(element));
  const svg = d3
    .select(element)
    //.classed('svg-container', true)
    .append('svg')
    // .attr('preserveAspectRatio', 'xMinYMin meet')
    // .attr('viewBox', '0 0 500 500')
    // .classed('svg-content-responsive', true)
    .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
    .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
    .append('g')
    .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

  // const x = d3
  //   .scaleLinear()
  //   .domain(d3.extent(data, (d) => d.x))
  //   .nice()
  //   .range([MARGIN.LEFT, WIDTH - MARGIN.RIGHT]);
  const y = d3.scaleLinear().domain([0, 50]).nice().range([HEIGHT, 0]);
  const x = d3.scaleLinear().domain([0, 50]).nice().range([0, WIDTH]);

  const xAxis = d3.axisBottom(x);
  svg
    .append('g')
    .attr('transform', `translate(0, ${HEIGHT})`)
    .call(xAxis)
    .call(d3.axisBottom(x).ticks(WIDTH / 80))
    .attr('fill', 'green');

  const yAxis = d3.axisLeft(y);
  svg.append('g').call(yAxis);

  const rects = svg.selectAll('rect').data(d);

  rects
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 1)
    .attr('y', 10)
    .attr('width', 1)
    .attr('height', (d) => y(d))
    .attr('fill', 'grey');

  // d3.json(data).then((d) => {
  //   console.log(`data: `, d);
  // });

  // useEffect(() => {
  //   // //     vis.g = d3

  // }, []);

  //d3.select(element);

  //return grid.update();
};

export const update = () => {};
