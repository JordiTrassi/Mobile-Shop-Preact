import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import { PhoneCard, IsLoading } from '../components';
import { setWantedPhones } from '../store';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


export const PhoneGridView = () => {
    
    const dispatch = useDispatch();
    
    const { isLoading, phones = [], inputValueList, wantedPhones } = useSelector(state => state.phoneList);
    
    useEffect(() => {

        let filterPhones;

        if (!inputValueList[0]) {
            filterPhones = phones;
            dispatch(setWantedPhones({ filterPhones }));
        } else {
           
            for (let x = 0; x < inputValueList.length; x++) {
                filterPhones = phones.filter(({ brand, model }) => (
                    brand.toLowerCase().includes(inputValueList[x]) || model.toLowerCase().includes(inputValueList[x])
                ));  
            };

            if (!filterPhones[0]) {
                Swal.fire({ icon: 'error', title: 'Ooops..', text: 'No results found. Insert new search.', confirmButtonColor: '#4D4D4D' });
            } else {
                dispatch(setWantedPhones({ filterPhones }));
            }
      
        }
    }, [inputValueList]);

    return (
                
        <Grid
            container           
            spacing={2}
            sx={{ width: '100%', bgcolor: 'background.paper', p: 1 }}
        >
            {
                (isLoading)
                    ? <Grid item sx={{ ml: '42%' }}><IsLoading /></Grid>
                    : wantedPhones.filterPhones.map( phone => (
                            <Grid
                                item
                                key={phone.id}
                                xs={12} sm={6} md={6} lg={4} xl={3}
                            > 
                                <PhoneCard                    
                                    {...phone}
                                />
                            </Grid>
                        )) 
                        
                     
                        
                     
            }
        </Grid>
    );
}