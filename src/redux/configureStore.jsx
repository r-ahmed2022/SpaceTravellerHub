import { configureStore, applyMiddleware, getDefaultMiddleware  } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import rocketReducer from './Rocket/rocket'


const store = configureStore({
  reducer: {
    rocketslist: rocketReducer,
  },
  middleware: (getDefaultMiddleware ) => getDefaultMiddleware().concat(logger),
});
export default store;
