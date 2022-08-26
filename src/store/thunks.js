import { setPhones, noApiResults, setSelectedPhone } from './phoneListSlice';

export const getPhones = ({ verifiedInputValue }) => {
    
    return async(dispatch) => {
        
        const resp = await fetch(`https://front-test-api.herokuapp.com/api/product/`);
        const data = await resp.json();
        
        (data.code === 0)
        ? dispatch(noApiResults())
        : dispatch(setPhones({ phones: data }));
        
    }
}

export const getSelectedPhone = (id) => {
    
    
    return async(dispatch) => {
        
        const resp = await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`);
        const phoneData = await resp.json();
        
        
        // console.log(phoneData);

        (phoneData.code === 0)
            ? dispatch(noApiResults())
            : dispatch(setSelectedPhone({ selectedPhone: phoneData }));
           
    }
}



// ?${verifiedInputValue}&limit=${page * 20}&entity=album