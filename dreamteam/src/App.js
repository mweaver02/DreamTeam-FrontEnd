import './App.css';
import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography, TextField, Stack } from '@mui/material';

function App()
 {
  return (
    <div className="App">
      <header className="App-header">
      <Typography
      sx={{fontSize: 8}}
      >Welcome to SportsSearch</Typography>
    <Card sx={{ minWidth: 300, minHeight: 100, transform: 'scale(3.5)' }} 
          variant="outlined">
      <CardContent>
      <Stack
      component="form"
      sx={{width: '15ch', height: '20'}}
      spacing={3}
      noValidate
      autoComplete="off"
      >
      <TextField
        label="Username"
        id="outlined-size-small"
        size="small"
        variant="outlined" 
      />
      <TextField
         label="Password"
         id="outlined-size-small"
         size="small"
         variant="outlined" 
      />
    </Stack>
      </CardContent>
      <CardActions>
      <Button 
          sx={{fontSize: 8}}
          variant="text"
          onClick={() =>
          {
            alert('clicked');
          }}
        >Login</Button>
        <Button
         sx={{fontSize: 8}}
         variant="text"
         onClick={() =>
         {
           alert('clicked');
         }}
        >Create Account</Button>
      </CardActions>
    </Card>
      </header>
    </div>
  );
}
export default App;
