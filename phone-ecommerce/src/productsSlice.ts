import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storeProducts } from './data';

export const productsReducer = createSlice({
  name: 'products',
  initialState: storeProducts,
  reducers: {
    addToCart: (state, action: PayloadAction<Number>) => {
      const product = state.find(el => el.id === action.payload);
      if (product) {
        product.inCart = true;
      }
    }
  }
});

export const { addToCart } = productsReducer.actions;
export default productsReducer.reducer;