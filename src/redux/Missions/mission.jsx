import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
const missionUrl = "https://api.spacexdata.com/v3/missions"

const initialState = {
  isLoading: false,
  list: [],
  msg: '',
};

export const LIST_MISSIONS = createAsyncThunk('LIST_MISSIONS', async () => {
    const response = await fetch(missionUrl);
    return response.json();
  });

   export const missionSlice = createSlice({
    name: 'missionlist',
    initialState,
    reducers: {
       JOIN_MISSION: (state, action) => {
           let filtered = state.list.map((mission) => {
              return (mission.mission_id === action.payload) ? {...mission, reserved: !mission.reserved} : mission
          });
          state.list = filtered
       },

    },
    extraReducers: (builder) => {
      builder.addCase(LIST_MISSIONS.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(LIST_MISSIONS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload?.map((mission) => {
            return {...mission, reserved: false}
        })
        return state
      });
      builder.addCase(LIST_MISSIONS.rejected, (state, action) => {
        state.msg = action.payload;
      });
    },
  });


  export default missionSlice.reducer;
  export const { JOIN_MISSION } = missionSlice.actions;
