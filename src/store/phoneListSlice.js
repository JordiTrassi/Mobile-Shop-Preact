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
        selectedPhoneId: '',
        selectedPhone: {},
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
            console.log("NO HAY RESULTADOS");
            state.errorMessage = 'No hay modelos disponibles!';
        },
        addPhoneToCart: (state, action) => {
            state.shoppingCart = action.payload.phone.id;
            state.cartItems = shoppingCart.length;
        },
        startLoadingSelectedPhone: (state, action) => {
            state.isLoading = true;
            state.selectedPhoneId = action.payload;
        },
        setSelectedPhone: (state, {payload}) => {
            state.isLoading = false;
            state.selectedPhone = payload.selectedPhone;
        },
        cleanSelectedPhone: (state, action) => {
            state.selectedPhoneId = '';
            state.selectedPhone = {};
        },
        addItemToShoppingCart: (state, action) => {
            state.shoppingCart = [...state.shoppingCart, action.payload]
            console.log(state.shoppingCart);
            console.log(state.shoppingCart.length);
        },
        

    },
})


export const {
    startLoadingPhones,
    setPhones,
    noApiResults,
    startLoadingSelectedPhone,
    setSelectedPhone,
    cleanSelectedPhone,
    addItemToShoppingCart,
} = phoneListSlice.actions;