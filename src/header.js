import * as React from 'react';
import {AppBar,Toolbar,Typography,IconButton,} from '@mui/material/';

export default function Header() {
  return (
    <div>
        <h1>Sample to print local time</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      
    <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
   
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
      </div>
  );
}
