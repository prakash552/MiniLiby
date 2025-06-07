import { configureStore } from '@reduxjs/toolkit';
// future slices import karenge yahan

const store = configureStore({
  reducer: {
    // user: userSlice,
    // cart: cartSlice,
  },
});

export default store;
