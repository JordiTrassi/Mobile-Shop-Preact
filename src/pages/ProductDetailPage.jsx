import { useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { cleanSelectedPhone, addItemToShoppingCart } from '../store/phoneListSlice';

import { PhoneColors, PhoneInternalMemory } from '../components';
import { addApiShoppingCart } from '../store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


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
  
  const { selectedPhoneOptions, selectedPhoneColorCode, selectedPhoneStorageCode } = useSelector(state => state.phoneList);
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!model) {
    navigate("/home");
  }

  const onBackPage = () => {
    navigate(-1);
    setTimeout(() => { dispatch(cleanSelectedPhone()) }, 150);
    
  };

  const onShoppingCartState = () => {
    (selectedPhoneOptions >= 101) 
      ? addItemToCart()
      : handleOpen();
  }

  const addItemToCart = () => {
    dispatch(addItemToShoppingCart({ id: id, colorCode: selectedPhoneColorCode, storageCode: selectedPhoneStorageCode }));
    dispatch(addApiShoppingCart({ id: id, colorCode: selectedPhoneColorCode, storageCode: selectedPhoneStorageCode }));
  }


  return (
    <>
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
              onClick={onShoppingCartState}
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
              <Typography color="white" variant='h4' sx={{p: 2}}>Price: {price} ???</Typography>

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
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              Select Options:
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Before adding the product to the shopping cart, select the color and/or internal memory.
              </Typography>
          </Box>
      </Modal>
    </>
  )
}


