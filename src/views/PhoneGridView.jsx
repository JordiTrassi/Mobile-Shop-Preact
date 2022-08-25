import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { PhoneCard, IsLoading } from '../components';


export const PhoneGridView = () => {
    
    const { isLoading, phones = [] } = useSelector(state => state.phoneList);

    return (
                
        <Grid
            container           
            spacing={2}
            sx={{ width: '100%', bgcolor: 'background.paper', p: 1 }}
        >
            {
                (isLoading)
                    ? <Grid item sx={{ml: '42%'}}><IsLoading /></Grid>
                    : phones.map( phone => (
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