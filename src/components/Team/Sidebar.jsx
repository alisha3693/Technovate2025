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
import './Sidebar.css';

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
  'Logistics & Hospitality',
  'Comic Con',
  'Website',
];

function ResponsiveDrawers(props) {
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
            <a href={`#${text}`} style={{ width: "100%" }}>
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
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Sidebar Drawer for Larger Screens */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} // Changed lg to md
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="permanent"
          className='custom-scrollbar'
          sx={{
            display: { xs: 'none', md: 'block' }, // Changed lg to md
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              overflowY: 'auto',  // Add this line
              '&::-webkit-scrollbar': {
                display: 'block'
              }
            },
          }}
          open
        >
          <div className="custom-scrollbar">  {/* Added this wrapper */}
            {drawer}
          </div>
        </Drawer>
      </Box>

      {/* Main Content */}


      {/* Horizontal Drawer at Bottom for Smaller Screens */}
      <Box
        component="nav"
        className="custom-scrollbar-horizontal"
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          display: { xs: 'flex', md: 'none' },
          whiteSpace: 'nowrap',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          padding: '10px 0',
        }}
      >
        {teams.map((text) => (
          <a href={`#${text}`} style={{ width: "100%" }} key={text}>
            <ListItem disablePadding>
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
                  minWidth: '150px',
                }}
              >
                {text.toUpperCase()}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawers;
