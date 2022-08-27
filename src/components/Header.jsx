import { useState, useEffect } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { startLoadingPhones, getPhones } from '../store';
import { verifyInputValue } from '../helpers/verifyInputValue';

import { AppBar, Badge, Box, IconButton, InputBase, Toolbar, Tooltip, Typography, } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import RingVolumeIcon from '@mui/icons-material/RingVolume';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Header = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = async () => {
    const verifiedInputValue = await verifyInputValue(inputValue);
    dispatch(startLoadingPhones({ verifiedInputValue }));
    dispatch(getPhones({ verifiedInputValue }));
  };

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        onSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [inputValue]);

  
  return (

    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ borderRadius: 3, backgroundColor: '#4D4D4D' }}>
        <Toolbar>
          <Tooltip
            title="home"
            arrow
            placement="bottom"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 1 }}
              href="/"
            >
              <RingVolumeIcon />
            </IconButton>
          </Tooltip>    
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Mobile Shop
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search mobile..."
              value={inputValue}
              onSubmit={onSubmit}
              onChange={onInputChange}
            />
          </Search>
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <Tooltip
            title="Your Cart"
            arrow
            placement="bottom"
            >
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton> 
            </Tooltip>
          </Box> 
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
