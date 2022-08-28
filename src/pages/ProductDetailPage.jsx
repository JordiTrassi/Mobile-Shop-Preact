import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { cleanSelectedPhone, addItemToShoppingCart } from '../store/phoneListSlice';
import { PhoneColors, PhoneInternalMemory } from '../components';




export const ProductDetailPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {
    id,
    brand,
    imgUrl,
    model,
    price,
    cpu,
    os,
    battery,
    dimentions,
    weight,
    displayResolution,
    primaryCamera,
    secondaryCmera,
  } = useSelector(state => state.phoneList.selectedPhone);
  
    
  // console.log(brand, imgUrl, model, price);
   
  

  if (!model) {
    return <Navigate to="/home" />
  }

  const onBackPage = () => {
    dispatch(cleanSelectedPhone());
    navigate(-1);
  };

  const onAddShoppingCart = () => {
    dispatch(addItemToShoppingCart({ itemId: id }));
  }


  return (
  
    <Grid
      className='animate__animated animate__fadeIn'
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: '100%',
        minHeight: '90vh',
        backgroundColor: '#4D4D4D',
        borderRadius: 3,
        boxShadow: 6,
        ml: 'auto', 
        mr: 'auto',
        mt: '20px'
      }}
    >
      <Grid
        item
        container
        direction="column"
        className='animate__animated animate__fadeInLeft'
        xs={12}
        sm={12}
        md={6}
        alignContent= "center"
        justifyContent= "center"
        sx={{ borderRadius: 3 }}
      >
        <Box
          item
          component="img"
          position="relative"
            sx={{
                boxShadow: 6,
                height: 'auto',
                width: 500,
                maxHeight: { xs: 'auto', md: 'auto' },
                maxWidth: { xs: 250, md: 400 },
                borderRadius: 5,
              }}
            alt={model}
            src={imgUrl}
        />
        <Tooltip
            title="Add to shopping cart"
            arrow
        >
          <IconButton
            onClick={onAddShoppingCart}
            sx={{
              color: 'white',
              pt: 2,
              mt: 5,
            }}
            aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon sx={{fontSize: 50}} />
          </IconButton>  
        </Tooltip>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={12} sm={12} md={6} 
        >
          <Grid item sx={{ pl: 5}}>
            <Typography color="white" variant='h2'sx={{pt: 3 }}>{model}</Typography>
            <Typography color="white" variant='h3' sx={{pb: 2}}>{brand}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>CPU:</Box> {cpu}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>OS:</Box> {os}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Display Resolution:</Box> {displayResolution}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Cameras:</Box> {primaryCamera} / {secondaryCmera}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Battery:</Box> {battery}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Dimetions:</Box> {dimentions}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Weight:</Box> {weight}</Typography>
            <Typography color="white" variant='h4' sx={{p: 2}}>Price: {price} €</Typography>

          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            sx={{ }}  
          >
            <PhoneColors />
            <PhoneInternalMemory />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ml: 6}} 
        >
          <Tooltip
            title="back"
            arrow
          >
          <IconButton
            onClick={onBackPage}
              sx={{
                color: 'white',
                ':hover': { opacity: 0.5 },
              }}
            >
              <ArrowCircleLeftIcon sx={{ fontSize: 45 }} />
            </IconButton>
          </Tooltip>
        </Grid>
     </Grid>
  )
}


