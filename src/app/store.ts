import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

type CartState = CartItem[];

const addToCart = createAction<CartItem>('ADD_TO_CART');
const removeFromCart = createAction<{ id: number }>('REMOVE_FROM_CART');

const initialCartState: CartState = [];

// Create a reducer using createReducer to handle actions
const cartReducer = createReducer(initialCartState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeFromCart, (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    });
});

const rootReducer = combineReducers({
  //TODO: add actions
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
