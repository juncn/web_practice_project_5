import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../type';

const localProducts = localStorage.getItem('products') || '[]';
const initialState: Product[] = JSON.parse(localProducts);

export const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
    addToCart: (state, action: PayloadAction<number>) => {
      const product = state.find(el => el.id === action.payload);
      if (product) {
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const product = state.find(el => el.id === action.payload);
      if (product) {
        product.count += 1;
        product.total = product.price * product.count;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const product = state.find(el => el.id === action.payload);
      if (product) {
        product.count -= 1;
        if (product.count === 0) {
          product.inCart = false;
          product.total = 0;
        } else {
          product.total = product.price * product.count;
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const product = state.find(el => el.id === action.payload);
      if (product) {
        product.count = 0;
        product.total = 0;
        product.inCart = false;
      }
    },
    clearCart: state => {
      state.forEach(item => {
        if (item.inCart) {
          item.inCart = false;
          item.count = 0;
          item.total = 0;
        }
      });
    }
  }
});

export const { setProducts, addToCart, increment, decrement, clearCart, removeItem } = productsReducer.actions;
export default productsReducer.reducer;