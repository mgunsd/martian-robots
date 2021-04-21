import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useAppDispatch } from 'store';
import { setMission } from 'store/missionSlice';
import { Side, InputCard, Input } from './FormUI';
export const Form = () => {
  const [gridSize, setGrid] = useState('5 5');
  const [startPosition, setStartPosition] = useState('0 0 N');
  const [commands, setCommands] = useState('');
  const [executionPlan, setExecutuionPlan] = useState('');
  //const { mission } = useAppSelector(selectedMission);
  const dispatch = useAppDispatch();

  const addRobot = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setExecutuionPlan(`${executionPlan}\n${startPosition}\n${commands}`);
  };

  const executeMission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const mission = executionPlan.split(`\n`);
    dispatch(setMission(mission));
  };

  return (
    <Side>
      <InputCard>
        <Typography variant="h5">Grid Size</Typography>
        <Input
          label="X Y"
          variant="outlined"
          fullWidth
          defaultValue="5 5"
          value={gridSize}
          onChange={(e) => {
            setGrid(e.target.value);
            setExecutuionPlan(e.target.value);
          }}
          helperText="The upper-right coordinates of a rectangular world, the lower-left coordinates are assumed to be 0, 0"
        />
      </InputCard>

      <InputCard>
        <Typography variant="h5">Robot Parameters</Typography>
        <Input
          label="Start Position"
          variant="outlined"
          fullWidth
          defaultValue="3 5"
          value={startPosition}
          onChange={(e) => setStartPosition(e.target.value)}
          helperText="A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line."
        />
        <Input
          label="Command Sequence"
          id="outlined-start-adornment"
          variant="outlined"
          fullWidth
          value={commands}
          onChange={(e) => setCommands(e.target.value)}
          defaultValue="Hello World"
          helperText="A robot instruction is a string of the letters “L”, “R”, and “F” on one line."
        />
        <Button onClick={addRobot} variant="contained">
          Add Robot
        </Button>
      </InputCard>
      <InputCard variant="outlined">
        <Typography variant="h5">Execution Plan</Typography>
        <Input
          label="Input"
          id="outlined-multiline-flexible"
          variant="outlined"
          fullWidth
          multiline
          value={executionPlan}
          onChange={(e) => setExecutuionPlan(e.target.value)}
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        <Button onClick={executeMission} variant="contained">
          Execute Mission
        </Button>
      </InputCard>
    </Side>
  );
};
