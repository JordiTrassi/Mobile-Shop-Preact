import { Grid, Typography } from '@mui/material';


export const InitialView = () => {

    return (
      
        <Grid
          className='animate__animated animate__fadeIn'
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            height: '90vh',
            opacity: 0.7,
            borderRadius: 3,
            pl: 2,
            pr: 2,
            mt: 2,
            backgroundImage: 'url("https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '80% 0',
          }}
          >
          <Grid
          item
          sx={{mt: -30}}
          >
            <Typography color="white" variant='h1'>Welcome to Mobile Shop</Typography>
            <Typography color="white" variant='h3'>Search your favorite phone with the best price!</Typography>
          </Grid>
        </Grid>
    )
}


