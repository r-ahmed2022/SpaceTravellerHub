import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rocket/rocket'


const store = configureStore({
  reducer: {
    rocketslist: rocketReducer,
  },
});
export default store;
