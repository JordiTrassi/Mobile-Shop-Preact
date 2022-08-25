import { createSlice } from '@reduxjs/toolkit';

export const phoneListSlice = createSlice({
    name: 'phoneList',
    initialState: {
        phones: [],
        isLoading: false,
        verifiedInputValue: '',
        errorMessage: '',
        shoppingCart: [],
        cartItems: 0, 
    },
    reducers: {
        startLoadingPhones: (state, action) => {
            state.isLoading = true;
            state.verifiedInputValue = action.payload.verifiedInputValue;
            state.errorMessage = '';
        },
        setPhones: (state, action) => {
            state.isLoading = false;
            state.phones = action.payload.phones;
            state.errorMessage = '';
        },
        noApiResults: (state, action) => {
            state.errorMessage = 'No hay modelos disponibles!';
        },
        addPhoneToCart: (state, action) => {
            state.shoppingCart = action.payload.phone.id;
            state.cartItems = shoppingCart.length;
        },
        

    },
})


export const { startLoadingPhones, setPhones, noApiResults} = phoneListSlice.actions;