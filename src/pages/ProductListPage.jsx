import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import { PhoneGridView } from '../views/PhoneGridView';

export const ProductListPage = () => {

    const { isLoading, verifiedInputValue } = useSelector(state => state.phoneList);

    return (

        <Grid
            className='animate__animated animate__fadeIn'
            container
            spacing={0}
            direction="row"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{p: 3 }}
        >
            <PhoneGridView />
        </Grid>
    );
}

