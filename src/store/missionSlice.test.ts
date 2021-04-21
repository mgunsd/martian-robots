import missionReducer, {
  resetMission,
  setMission,
  MissionState,
} from './missionSlice';
import { SampleMission } from './SampleMission';

describe('mission reducer', () => {
  const initialState: MissionState = {
    mission: SampleMission,
    gridSize: '5 5',
  };
  it('should handle initial state', () => {
    expect(missionReducer(undefined, { type: 'unknown' })).toEqual({
      mission: SampleMission,
      gridSize: '5 5',
    });
  });

  it('reset mission', () => {
    const Mission = missionReducer(initialState, resetMission());
    expect(Mission.mission).toEqual(SampleMission);
  });

  it('should handle mission update', () => {
    const state = missionReducer(
      initialState,
      setMission(['5 6', '1 4 N', 'LLLRRRRRFFF', '2 6 E', 'RRFFLFLF'])
    );
    expect(state.mission).toEqual([
      '1 4 N',
      'LLLRRRRRFFF',
      '2 6 E',
      'RRFFLFLF',
    ]);
  });
});
