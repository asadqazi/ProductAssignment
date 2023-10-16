import {createSlice} from '@reduxjs/toolkit';
import {CartDto} from '../dto/CartDto';

export type CartState = {
  cartItems: CartDto[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        item => item.product?.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cartItems.push({count: 1, product: action.payload});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.product.id === action.payload,
      );
      if (item) {
        item.count++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.product.id === action.payload,
      );
      if (item) {
        if (item.count === 1) {
          item.count = 1;
        } else {
          item.count--;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        item => item.product.id !== action.payload,
      );
      state.cartItems = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {addToCart, incrementQuantity, decrementQuantity, removeItem} =
  cartSlice.actions;
