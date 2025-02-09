import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

export default function NavBar() {
  const navMenuStyle = {
    background: 'rgba(47, 94, 241, 0.6)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(6px)',
    width: '250px',
    zIndex: 1301,
    color: 'white',
    fontFamily: 'technovate',
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize navigate

  const handleMenuClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget); // Toggle menu open/close
    setMenuOpen(!menuOpen); // Toggle the hamburger animation
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu when an item is selected
    setMenuOpen(false); // Reset the animation state
  };

  const handleScheduleClick = () => {
    navigate('/schedule');
    handleMenuClose();
  };

  // const handleSponsorClick = () => {
  //   navigate('/sponsors');
  //   handleMenuClose();
  // }

  
  const handleEventClick = () => {
    navigate('/events');
    handleMenuClose();
  }

  const handleHomeClick = () => {
    navigate('/');
    handleMenuClose();
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%', margin: '0' }}>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(47, 94, 241, 0.4)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(6px)',
          width: '95%',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1301,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              zIndex: 1301,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            onClick={handleMenuClick} // Toggle the menu open/close state on click
          >
               <button
              className={`menu ${menuOpen ? 'opened' : ''}`} // Toggle 'opened' class for animation
              aria-label="Main Menu"
            >
              <svg width="35" height="35" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleHomeClick} sx={navMenuStyle}>
              Home
            </MenuItem>
            <MenuItem onClick={handleEventClick} sx={navMenuStyle}>
              Events
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={navMenuStyle}>
              Team
            </MenuItem>
            {/* <MenuItem onClick={handleSponsorClick} sx={navMenuStyle}>
              Sponsor
            </MenuItem> */}
            <MenuItem onClick={handleScheduleClick} sx={navMenuStyle}>
              Schedule
            </MenuItem>
          </Menu>

          <Typography
            sx={{
              marginLeft: 'auto',
              color: 'white',
              fontFamily: 'technovate',
              fontWeight: '900',
              zIndex: 1301,
              backgroundColor: 'transparent',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            CONTACT
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
