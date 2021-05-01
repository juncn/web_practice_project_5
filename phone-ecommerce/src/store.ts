import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './features/modalSlice';
import { productsReducer } from './features/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer.reducer,
    modal: modalReducer.reducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState}
export type AppDispatch = typeof store.dispatch;