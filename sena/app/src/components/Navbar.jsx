import { AppBar, Button, Toolbar } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 
const Navbar = () => {
  return (
    <div >
      <br /><br /><br />
      <h2 style={{textAlign:'center'}}> "Blogging is like work, but without coworkers thwarting you at every turn."</h2>
      <h2 style={{textAlign:'center'}}>– Scott Adams</h2>
      <AppBar style={{backgroundColor:'#C76D6D'}}>
              <Toolbar>
              <img src="https://www.wizbrand.com/tutorials/wp-content/uploads/2021/12/featured.jpg" alt="" style={{ height: 40, marginRight: '20px' }} />
              <h2>BLOG APPLICATION</h2>
              &nbsp;  &nbsp;
              <Search sx={{marginRight:90}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link to='/Home'> 
            <Button variant='outlined' sx={{  backgroundColor:'white' ,color: 'black' }} >Home</Button>
          </Link>
          &nbsp; 
          <Link to='/Blog'> 
            <Button variant='outlined' sx={{  backgroundColor:'white' ,color: 'black' }}>Form</Button>
          </Link>
          &nbsp; &nbsp;
          <Link to='/About'> 
            <Button variant='contained' sx={{  backgroundColor:'white' ,color: 'black' }}>About</Button>
          </Link>
              </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar