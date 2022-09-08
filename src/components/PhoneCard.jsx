import { h } from 'preact';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { startLoadingSelectedPhone } from '../store/phoneListSlice';
import { getSelectedPhone } from '../store/thunks';
import { useNavigate } from 'react-router-dom';
import { IsLoading } from './IsLoading';


export const PhoneCard = ({
    brand,
    imgUrl,
    model,
    price,
    id,
}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector(state => state.phoneList);


  const onSelectedPhone = () => {

    dispatch(startLoadingSelectedPhone(id));

    (isLoading)
      ? <IsLoading />
      : setTimeout(() => { navigate(`/product/${id}`) }, 150);
    
    dispatch(getSelectedPhone(id));
    
  };
    
  return (
      
      <Card
        className='animate__animated animate__fadeIn'
        sx={{
          display: 'flex',
          mb: '20px',
          justifyContent: 'space-between',
          boxShadow: 6,
          borderRadius: 3,
        }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4" data-testid="test-collectionName">
            {brand}
          </Typography>
          <Typography component="div" variant="subtitle1" color="text.secondary">
            {model}
          </Typography>
          <Typography component="div" variant="h5" color="text.secondary" sx={{p: 2, ml: 2}}>
            Price: {price} €
          </Typography>
        </CardContent>
              
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Tooltip
            title="more info"
            placement="right"
            arrow
          >
            <IconButton
              aria-label="btn-detail"
              onClick={onSelectedPhone}
            >
              <AddCircle fontSize= 'large'/> 
            </IconButton>              
          </Tooltip>               
        </Box>
      </Box>
        <CardMedia
          component="img"
          image={imgUrl}
          alt={model}
          sx={{ height: 200, width: 'auto', p: 2 }}     
        />
    </Card>
  );
}