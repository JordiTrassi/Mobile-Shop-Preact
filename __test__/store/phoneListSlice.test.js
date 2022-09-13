import { addItemToShoppingCart, phoneListSlice, startLoadingPhones } from "../../src/store/phoneListSlice";



describe('Pruebas en phoneListSlice', () => {

    const initialState = {
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
    };
  
    test('startLoadingPhones debe recibir el inputValueList y poner isLoading en true', () => {
      
        const inputValueList = ['acer', 'liquid'];

        const state = phoneListSlice.reducer(initialState, startLoadingPhones({ inputValueList }));
            
        expect(state).toEqual({
            phones: [],
            isLoading: true,
            loadedInformation: true,
            inputValueList: inputValueList,
            wantedPhones: [],
            errorMessage: '',
            userShoppingCart: [],
            shoppingCartApiConfirmed: 0,
            selectedPhoneId: '',
            selectedPhoneColorCode: '',
            selectedPhoneStorageCode: '',
            selectedPhone: {},
            selectedPhoneOptions: 0,
        });

    });
    
    test('addItemToShoppingCart debe agregar un nuevo item en el carro', () => {

        const itemSelected = { id: '1234abcd', colorCode: 'colorTest', storageCode: 'storageTest' };
        
        const state = phoneListSlice.reducer(initialState, addItemToShoppingCart(itemSelected));
        
        expect(state.userShoppingCart).toEqual(expect.objectContaining([itemSelected]));
    });
    
});
