import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slices/cartSlice';

const store = configureStore({
    reducer: { cart: cartReduser }
})
console.log('create store:', store.getState());

store.subscribe(() => {
    console.log('store change : ', store.getState());
});

export default store;