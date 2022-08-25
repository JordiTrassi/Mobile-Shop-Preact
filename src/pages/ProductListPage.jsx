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
            sx={{p: 2 }}
        >
            {/* <Box
                item
                display="flex"
                flexDirection="row"
                justifyContent="center"
                sx={{mb: '20px', mt: '10px' }}    
            >
                <Button
                    variant="contained"
                    disabled={!viewGrid}
                    onClick={() => dispatch(changingViewGrid(false))}
                    sx={{ p: 2, mr: 3 }}
                >
                <Tooltip
                    title="List View"
                    arrow
                    placement="left"
                >
                    <FormatListBulletedIcon sx={{fontSize: 32}} />  
                </Tooltip>
                </Button>
            
                <Button
                    variant="contained"
                    disabled={viewGrid}
                    onClick={() => dispatch(changingViewGrid(true))}
                    sx={{ p: 2, ml: 3 }}
                >
                <Tooltip
                    title="Grid View"
                    arrow
                    placement="right"
                >
                    <GridViewIcon sx={{fontSize: 32}} />  
                </Tooltip>
                </Button>
                
            </Box> */}

            <PhoneGridView />
        
            <Tooltip
            title="more results"
            arrow
            >
                <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={() => dispatch(getAlbums({ page, verifiedInputValue }))}
                    sx={{ p: 2, mb: '30px' }}
                >
                    Next Page
                </Button>
                
            </Tooltip>
        </Grid>
    );
}

