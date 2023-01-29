import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
const missionUrl = "https://api.spacexdata.com/v3/missions"

export const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
  isLoading: false,
  list: [],
  msg: '',
});

export const LIST_MISSIONS = createAsyncThunk('LIST_MISSIONS', async () => {
    const response = await fetch(rocketsUrl);
    return response.json();wwe23f24f3
  });

  export const JOIN_ROCKET = (payload) => ({
    type: JOIN_MISSION,
    payload,
  });

   export const missionSlice = createSlice({
    name: 'missionlist',
    initialState,
    reducers: {
       JOIN_MISSION: (payload) => {
        return state.map((mission) => {
            if (mission.id === payload) {
              return { ...rocket, reserved: !rocket.reserved };
            }
            return rocket;
          });
       }
      
    },
    extraReducers: (builder) => {
      builder.addCase(LIST_MISSIONS.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(LIST_MISSIONS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.map((rocket) => {
            return {...rocket, reserved:  false}
        })
        return state;
      });
      builder.addCase(LIST_MISSIONS.rejected, (state, action) => {
        state.msg = action.payload;
      });
    },
  });


  export default missionSlice.reducer;
