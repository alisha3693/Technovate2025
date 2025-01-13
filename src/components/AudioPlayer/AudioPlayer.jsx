import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import cindrella from '../../assets/audio/Timeless.mp3';
import song2 from '../../assets/audio/Starboy.mp3';
import song3 from '../../assets/audio/Fein.mp3';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [music, setMusic] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [play, { stop, pause }] = useSound(cindrella);
  const [playSong2, { stop: stopSong2, pause: pauseSong2 }] = useSound(song2);
  const [playSong3, { stop: stopSong3, pause: pauseSong3 }] = useSound(song3);
  const [currentSong, setCurrentSong] = useState(1);

  useEffect(() => {
    if (music) {
      if (currentSong === 1) {
        play();
      } else if (currentSong === 2) {
        playSong2();
      } else if (currentSong === 3) {
        playSong3();
      }
    } else {
      stop();
      stopSong2();
      stopSong3();
    }
  }, [music, currentSong, play, playSong2, playSong3, stop, stopSong2, stopSong3]);

  const toggleMusic = () => {
    setMusic(prev => !prev);
  };

  const openSongDialog = () => setOpenDialog(true);
  const closeSongDialog = () => setOpenDialog(false);

  const selectSong = (song) => {
    stop();
    stopSong2();
    stopSong3();
    pause();
    pauseSong2();
    pauseSong3();
    setCurrentSong(song);
    if (song === 1) play();
    if (song === 2) playSong2();
    if (song === 3) playSong3();
    setMusic(true);
    closeSongDialog();
  };

  return (
    <div className="music-button">
      <IconButton onClick={toggleMusic} sx={{ marginRight: "auto" }}>
        {music ? <HeadsetIcon sx={{ color: "white", fontSize: "25px" }} /> : <HeadsetOffIcon sx={{ color: "white", fontSize: "27px" }} />}
      </IconButton>
      <IconButton onClick={openSongDialog} sx={{ marginLeft: "10px", color: "white", fontFamily: "technovate" }}>
        <SportsEsportsIcon style={{ fontSize: "30px" }} />
      </IconButton>

      <Dialog open={openDialog} onClose={closeSongDialog} maxWidth="xs" fullWidth sx={{ backdropFilter: 'blur(8px)', border: '2px solid #9B4DFF', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)', background: 'linear-gradient(45deg, rgba(64, 144, 181, 0.8), rgba(158, 48, 169, 0.8))' }}>
        <DialogTitle sx={{ fontFamily: "technovate", color: "#9B4DFF", fontWeight: "900" }}>Select a Song</DialogTitle>
        <DialogContent sx={{ padding: '20px' }}>
          <Button onClick={() => selectSong(1)} fullWidth sx={{ fontFamily: "technovate", color: "white", fontWeight: "900", borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', marginBottom: '10px' }}>Track 1 - Timeless</Button>
          <Button onClick={() => selectSong(2)} fullWidth sx={{ fontFamily: "technovate", color: "white", fontWeight: "900", borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', marginBottom: '10px' }}>Track 2 - Starboy</Button>
          <Button onClick={() => selectSong(3)} fullWidth sx={{ fontFamily: "technovate", color: "white", fontWeight: "900", borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', marginBottom: '10px' }}>Track 3 - Fein</Button>
        </DialogContent>
        <DialogActions sx={{ padding: '10px' }}>
          <Button onClick={closeSongDialog} color="primary" sx={{ fontFamily: "technovate", color: "#9B4DFF", fontWeight: "900" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
