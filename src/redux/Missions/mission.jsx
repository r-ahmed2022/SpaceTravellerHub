import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
const missionUrl = "https://api.spacexdata.com/v3/missions"

/* export const getAPI = (payload) => ({
  type: GET_API,
  payload,
});



export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.payload];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
    default:
      return state;
  }
};

*/

export default missionReducer;