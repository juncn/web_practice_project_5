import { createSlice } from '@reduxjs/toolkit';
import { storeProducts } from './data';

export const productsReducer = createSlice({
  name: 'products',
  initialState: storeProducts,
  reducers: {
    addToCart: state => {
      state[0].count++;
    }
  }
});

export const { addToCart } = productsReducer.actions;
export default productsReducer.reducer;