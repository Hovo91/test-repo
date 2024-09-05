import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { reducers } from './reducers';

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers,
});
