import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { X } from 'lucide-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '70%',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
//   backgroundImage: "url('../../../assets/images/Texture/glass texture.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: 24,
};

export default function EventModal({ title, onClose }) {
  return (
    <Modal open={true} onClose={onClose} aria-labelledby="modal-title">
      <Box sx={style}>
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor:'rgba(141, 33, 49, 0.81)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}
        >
          {/* Close Button */}
          <Button
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              minWidth: 'auto',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '5px',
              borderRadius: '50%',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
            }}
          >
            <X size={24} />
          </Button>

          {/* Event Title */}
          <Typography id="modal-title"  sx={{ color: 'white', fontWeight: 'bold' , fontSize:'3rem'}}>
            {title}
          </Typography>

          {/* Image Placeholder */}
          <Box
            sx={{
              width: '20%',
              height: '40%',
              backgroundColor: 'gray',
              display: 'flex',
              marginRight:'auto',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              marginBottom: 'auto',
            }}
          >
            🖼️
          </Box>

          
        
        </Box>
      </Box>
    </Modal>
  );
}
