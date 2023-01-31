import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const rocketsUrl = "https://api.spacexdata.com/v4/rockets"

const initialState = {
  isLoading: false,
  list: [],
  msg: '',
};

export const LIST_ROCKETS = createAsyncThunk('LIST_ROCKETS', async () => {
    const response = await fetch(rocketsUrl);
    return response.json();
  });

   export const rocketSlice = createSlice({
    name: 'rocketslist',
    initialState,
    reducers: {
       JOIN_ROCKET: (state, action) => {
        let filtered = state.list?.map((rocket) => {
           return (rocket.id === action.payload) ? { ...rocket, reserved: !rocket.reserved } :  rocket;
          });
          state.list = filtered
       }
       
    },
    extraReducers: (builder) => {
      builder.addCase(LIST_ROCKETS.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(LIST_ROCKETS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.map((rocket) => {
            return {...rocket, reserved:  true}
        })
        return state;
      });
      builder.addCase(LIST_ROCKETS.rejected, (state, action) => {
        state.msg = action.payload;
      });
    },
  });


  export default rocketSlice.reducer;
  export const { JOIN_ROCKET } = rocketSlice.actions;


  
/*

const GET_API = 'data/rockets/GET_API';
const JOIN_ROCKET = 'data/rockets/JOIN_ROCKET';

export const getAPI = (playload) => ({
  type: GET_API,
  playload,
});

export const joinRocket = (payload) => ({
  type: JOIN_ROCKET,
  payload,
});

const initialState = [];
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.playload];
    case JOIN_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === +action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
    default:
      return state;
  }
};

*/
