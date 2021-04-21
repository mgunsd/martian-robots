import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { SampleMission } from './SampleMission';

export interface MissionState {
  mission: string[];
  gridSize: string;
}

const initialState: MissionState = {
  mission: SampleMission,
  gridSize: '5 5',
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    resetMission: (state, action: PayloadAction<void>) => {
      state.mission = SampleMission;
    },
    setMission: (state, action: PayloadAction<string[]>) => {
      state.gridSize = action.payload[0];
      action.payload.shift();
      state.mission = action.payload;
    },
  },
});

export const { resetMission, setMission } = missionSlice.actions;

export const selectedMission = (state: RootState) => state.mission;

export default missionSlice.reducer;
