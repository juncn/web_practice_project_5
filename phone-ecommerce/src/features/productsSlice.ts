import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storeProducts } from '../data';

export const productsReducer = createSlice({
  name: 'products',
  initialState: storeProducts,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const product = state.find(el => el.id === action.payload);
      if (product) {
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      console.log('increment is called with ' + action.payload);
    },
    decrement: (state, action: PayloadAction<number>) => {
      console.log('decrement is called with ' + action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      console.log('removeItem is called with ' + action.payload);
    },
    clearCart: state => {
      console.log('clearCart is called');
    }
  }
});

export const { addToCart, increment, decrement, clearCart, removeItem } = productsReducer.actions;
export default productsReducer.reducer;