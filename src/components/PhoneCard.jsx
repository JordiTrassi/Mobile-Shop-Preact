import { Link } from 'preact-router';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';


export const PhoneCard = ({
    brand,
    imgUrl,
    model,
    price,
    id,
}) => {

  return (
      <Card
          className='animate__animated animate__fadeIn'
          sx={{ display: 'flex', mb: '20px', justifyContent: 'space-between', boxShadow: 6 }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" data-testid="test-collectionName">
            {brand}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {model}
          </Typography>
        </CardContent>
              
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Link to={`/product/${id}`} >
            <Tooltip
              title="more info"
              placement="right"
              arrow
            >
              <IconButton>
                    <AddCircle fontSize='large'/> 
                </IconButton>              
            </Tooltip>
          </Link>
               
        </Box>
      </Box>
        <CardMedia
            component="img"
            image={imgUrl}
            alt={model}
            sx={{ height: 200, width: 'auto' }}     
        />
    </Card>
  );
}