import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import authReducer from './authReducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    searchReducer,
    authReducer,
    devTools: true ,
    middleware
  },
});

export default store;