import { configureStore } from '@reduxjs/toolkit';
import routReducer from './routSlice';

export default configureStore({
  reducer: {
    rout: routReducer,
  },
});