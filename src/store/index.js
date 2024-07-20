import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

const initialState = {
  isAdmin: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action) {
      state.isAdmin = action.payload;
    },
  },
});

export const { setAdmin } = adminSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, adminSlice.reducer);

const store = configureStore({
  reducer: {
    admin: persistedReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export const persistor = persistStore(store);

export default store;
