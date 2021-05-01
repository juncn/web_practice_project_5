import { createSlice } from '@reduxjs/toolkit';

export const modalReducer = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    toggleModal: state => !state
  }
});

export const { toggleModal } = modalReducer.actions;
export default modalReducer.reducer;