import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { PhoneCard, IsLoading } from '../components';
import { setWantedPhones } from '../store';


export const PhoneGridView = () => {
    
    const dispatch = useDispatch();
    const { isLoading, phones = [], verifiedInputValue, wantedPhones } = useSelector(state => state.phoneList);

    console.log(wantedPhones);
    
    useEffect(() => {

        let filterPhones;

        if (!verifiedInputValue) {
            console.log("Pasamos los PHONES a los WantedPhones");
            filterPhones = phones;
            dispatch(setWantedPhones({ filterPhones }));
        } else {
            console.log("HACEMOS EL FILTRADO DE PHONES");
            console.log(verifiedInputValue);
            filterPhones = phones.filter(({brand, model}) => brand == verifiedInputValue || model == verifiedInputValue);
            console.log(filterPhones);
            dispatch(setWantedPhones({ filterPhones }));
        }

    }, [verifiedInputValue]);

    return (
                
        <Grid
            container           
            spacing={2}
            sx={{ width: '100%', bgcolor: 'background.paper', p: 1 }}
        >
            {
                (isLoading)
                    ? <Grid item sx={{ml: '42%'}}><IsLoading /></Grid>
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