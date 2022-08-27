import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { cleanSelectedPhone } from '../store/phoneListSlice';




export const ProductDetailPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {
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
  
  
  
  console.log(brand, imgUrl, model, price);
   
  

  if (!model) {
    return <Navigate to="/home" />
  }

  

  const onBackPage = () => {
    dispatch(cleanSelectedPhone());
    navigate(-1);
  };


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
        className='animate__animated animate__fadeInLeft'
        xs={12}
        sm={12}
        md={6}
        alignContent= "center"
        justifyContent= "center"
        sx={{
          
          borderRadius: 3,
          backgroundColor: 'green',
          
        }}
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
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={12} sm={12} md={6}
          // sx={{ ml: 6 }} 
        >
          <Grid item sx={{ backgroundColor:'red', pl: 5}}>
            <Typography color="white" variant='h2'sx={{pt: 3 }}>{model}</Typography>
            <Typography color="white" variant='h3' sx={{pb: 2}}>{brand}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>CPU:</Box> {cpu}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>OS:</Box> {os}</Typography>
          <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Display Resolution:</Box> {displayResolution}</Typography>
          <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Cameras:</Box> {primaryCamera} / {secondaryCmera}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Battery:</Box> {battery}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Dimetions:</Box> {dimentions}</Typography>
            <Typography color="white" variant='h6' sx={{}}><Box sx={{ fontStyle: 'italic' }}>Weight:</Box> {weight}</Typography>
            <Typography color="white" variant='h5' sx={{pt: 2}}>Price: {price} €</Typography>

          </Grid>
          <Grid
            item
            sx={{ backgroundColor:'red'}}  
          >
            
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


