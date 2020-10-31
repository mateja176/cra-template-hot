import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { modalSlice } from './slices';

const reducers = { [modalSlice.name]: modalSlice.reducer };

export default configureStore({
  reducer: combineReducers(reducers),
});
