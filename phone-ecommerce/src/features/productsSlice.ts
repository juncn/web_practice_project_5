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
      console.log('increment is called');
    },
    decrement: (state, action: PayloadAction<number>) => {
      console.log('decrement is called');
    },
    clearCart: state => {
      console.log('clearCart is called');
    }
  }
});

export const { addToCart, increment, decrement, clearCart } = productsReducer.actions;
export default productsReducer.reducer;