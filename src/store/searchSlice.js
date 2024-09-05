import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: { value: '' },
  reducers: {
    setValue: (store, action) => {
      store.value = action.payload;
      return store;
    },
  },
});

export const { setValue } = searchSlice.actions;
