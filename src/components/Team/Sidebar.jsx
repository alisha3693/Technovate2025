import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import { Toolbar } from '@mui/material';
import TeamSection from './TeamSection';

const drawerWidth = 300;

const teams = [
  'Overall Coordinators',
  'Sponsorship',
  'Marketing',
  'Outlook',
  'Tech',
  'Cultural',
  'Sports',
  'Design and Doc',
  'Video Editing',
  'Hospitality and Logistics',
  'Comic Con',
  'Website',
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        height: '100%',
        color: 'white',
        fontFamily: 'CounterStreamDemoRegular',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          padding: '20px 0',
          color: '#FFFFFF',
          textShadow: '2px 2px 8px rgba(255, 255, 255, 0.3)',
          fontFamily: 'CounterStreamDemoRegular',
        }}
      >
        TECHNOVATE<br />TEAMS
      </Typography>
      <Divider />
      <List>
        {teams.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                margin: '10px',
                borderRadius: '8px',
                background: 'rgba(0, 50, 100, 0.4)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  background: 'rgba(0, 50, 100, 0.6)',
                },
              }}
            >
              <GroupIcon sx={{ color: '#FFFFFF', marginRight: '10px' }} />
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'CounterStreamDemoRegular',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                {text.toUpperCase()}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontFamily: 'CounterStreamDemoRegular' }}
          >
            Technovate
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Larger Screens */}
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="permanent"
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      
      {/* Horizontal Drawer at Bottom for Smaller Screens */}
      <Box
        component="nav"
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          display: { xs: 'flex', lg: 'none' },
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {teams.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                margin: '10px',
                borderRadius: '8px',
                background: 'rgba(0, 50, 100, 0.4)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  background: 'rgba(0, 50, 100, 0.6)',
                },
                color: '#FFFFFF',
                textAlign: 'center',
                minWidth: '150px', // Adjust width for better horizontal scrolling
              }}
            >
              {text.toUpperCase()}
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
