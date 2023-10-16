import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import {cartReducer} from './slices/cartSlice';

const rootReducer = combineReducers({
  products: productsSlice,
  cart: cartReducer,
});

const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
export default store;
