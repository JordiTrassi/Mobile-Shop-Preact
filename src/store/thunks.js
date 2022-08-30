import { setPhones, noApiResults, setSelectedPhone, addPhoneToUserCart } from './phoneListSlice';

export const getPhones = () => {
    
    return async(dispatch) => {
        
        // Filtramos la busqueda en el lado del cliente

        const resp = await fetch('https://front-test-api.herokuapp.com/api/product/');
        const data = await resp.json();
        
        (data.code === 0)
            ? dispatch(noApiResults())
            : dispatch(setPhones({ phones: data }));
        
    }
}

export const getSelectedPhone = (id) => {
    
    return async(dispatch) => {
        
        let resp = await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`);
        let phoneData = await resp.json();

        (phoneData.code === 0)
            ? dispatch(noApiResults())
            : dispatch(setSelectedPhone({ selectedPhone: phoneData }));
           
    }
}

export const addApiShoppingCart = (params) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };

    return async (dispatch) => {

        let resp = await fetch(`https://front-test-api.herokuapp.com/api/cart/`, options);
        let response = await resp.json();

        (response.code === 0)
            ? console.log("Api connection Error")
            : dispatch(addPhoneToUserCart({ count: response.count }));
    }

}

