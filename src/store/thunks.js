import { setPhones, noApiResults } from './phoneListSlice';

export const getPhones = ({ verifiedInputValue }) => {
    
    return async(dispatch) => {
        
        const resp = await fetch(`https://front-test-api.herokuapp.com/api/product`);
        const data = await resp.json();
  
        (data.resultCount === 0)
            ? dispatch(noApiResults())
            : dispatch(setPhones({ phones: data.results }));
           
    }
}

// ?${verifiedInputValue}&limit=${page * 20}&entity=album