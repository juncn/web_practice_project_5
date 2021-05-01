import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const modalReducer = createSlice({
  name: 'modal',
  initialState: { id: 0, isModalOpen: false },
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
      state.isModalOpen = true;
      state.id = action.payload;
    },
    closeModal: state => { 
      state.id = 0;
      state.isModalOpen = false;
    }
  }
});

export const { openModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;