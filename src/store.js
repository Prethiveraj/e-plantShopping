// store.js

// 1. Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// 2. Import your cart reducer from CartSlice
import cartReducer from './CartSlice';

// 3. Create and configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer, // "cart" will be the key in your global Redux state
  },
});

// 4. Export the store so it can be used in your app
export default store;
