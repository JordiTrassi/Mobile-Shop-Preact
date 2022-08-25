import { configureStore } from '@reduxjs/toolkit';
import { phoneListSlice } from './phoneListSlice';

export const store = configureStore({
    reducer: {
        phoneList: phoneListSlice.reducer,
    },
});