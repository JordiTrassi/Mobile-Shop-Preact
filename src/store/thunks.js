import { setPhones, noApiResults, setSelectedPhone, addPhoneToUserCart } from './phoneListSlice';

export const getPhones = ({ verifiedInputValue }) => {
    
    return async(dispatch) => {
        
        //TODO: Filtrar busqueda

        const resp = await fetch('https://front-test-api.herokuapp.com/api/product/');
        const data = await resp.json();
        console.log(data);
        
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



// ?${verifiedInputValue}&limit=${page * 20}&entity=album