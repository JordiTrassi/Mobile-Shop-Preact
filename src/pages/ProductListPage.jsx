import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Grid, Tooltip} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';

import { getPhones } from '../store';
import { PhoneGridView } from '../views/PhoneGridView';

export const ProductListPage = () => {

    const dispatch = useDispatch();
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

