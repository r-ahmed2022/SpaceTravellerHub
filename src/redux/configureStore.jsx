import { configureStore, applyMiddleware, getDefaultMiddleware  } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import rocketReducer from './Rocket/rocket'
import missionReducer from './Missions/mission'

const store = configureStore({
  reducer: {
    rocketslist: rocketReducer,
    missionlist: missionReducer,
  },
  middleware: (getDefaultMiddleware ) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
});
export default store;
