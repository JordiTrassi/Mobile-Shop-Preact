import { createSlice } from '@reduxjs/toolkit';

export const phoneListSlice = createSlice({
    name: 'phoneList',
    initialState: {
        phones: [],
        isLoading: false,
        verifiedInputValue: '',
        errorMessage: '',
        userShoppingCart: [],
        shoppingCartApiConfirmed: 0,
        selectedPhoneId: '',
        selectedPhoneColorCode: '',
        selectedPhoneStorageCode: '',
        selectedPhone: {},
        selectedPhoneOptions: 0,
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
            console.log("THERE ARE NOT API RESULTS");
            state.errorMessage = 'No models available!';
        },
        addPhoneToUserCart: (state, {payload}) => {
            let count = payload.count;
            state.shoppingCartApiConfirmed += count;
        },
        startLoadingSelectedPhone: (state, action) => {
            state.isLoading = true;
            state.selectedPhoneId = action.payload;
        },
        setSelectedPhone: (state, {payload}) => {
            state.selectedPhone = payload.selectedPhone;
            state.isLoading = false;
        },
        cleanSelectedPhone: (state, action) => {
            state.selectedPhoneId = '';
            state.selectedPhone = {};
            state.selectedPhoneColorCode = '';
            state.selectedPhoneStorageCode = '';
            state.selectedPhoneOptions = 0;
        },
        addItemToShoppingCart: (state, action) => {
            state.userShoppingCart = [...state.userShoppingCart, action.payload];
        },
        addSelectedPhoneColor: (state, action) => {
            state.selectedPhoneColorCode = action.payload;
            state.selectedPhoneOptions += 1;
        },
        addSelectedPhoneMemory: (state, action) => {
            state.selectedPhoneStorageCode = action.payload;
            state.selectedPhoneOptions += 100;
        },
        

    },
})


export const {
    startLoadingPhones,
    setPhones,
    noApiResults,
    addPhoneToUserCart,
    startLoadingSelectedPhone,
    setSelectedPhone,
    cleanSelectedPhone,
    addItemToShoppingCart,
    addSelectedPhoneColor,
    addSelectedPhoneMemory,
} = phoneListSlice.actions;