import { createSlice } from '@reduxjs/toolkit';

export const phoneListSlice = createSlice({
    name: 'phoneList',
    initialState: {
        phones: [],
        isLoading: false,
        loadedInformation: false,
        inputValueList: [],
        wantedPhones: [],
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
            state.inputValueList = action.payload.inputValueList;
            state.errorMessage = '';
            state.loadedInformation = true;
        },
        setPhones: (state, action) => {
            state.phones = action.payload.phones;
            state.errorMessage = '';
        },
        setWantedPhones: (state, action) => {
            state.wantedPhones = action.payload;
            state.isLoading = false;
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
        cleanStore: (state, action) => {
            state.phones = [];
            state.loadedInformation = false;
            state.errorMessage = '';
            state.userShoppingCart = [];
            state.shoppingCartApiConfirmed = 0;
            state.selectedPhoneId = '';
            state.selectedPhoneColorCode = '';
            state.selectedPhoneStorageCode = '';
            state.selectedPhone = {};
            state.selectedPhoneOptions = 0;
        },
        

    },
})


export const {
    startLoadingPhones,
    setPhones,
    setWantedPhones,
    noApiResults,
    addPhoneToUserCart,
    startLoadingSelectedPhone,
    setSelectedPhone,
    cleanSelectedPhone,
    addItemToShoppingCart,
    addSelectedPhoneColor,
    addSelectedPhoneMemory,
    cleanStore,
} = phoneListSlice.actions;