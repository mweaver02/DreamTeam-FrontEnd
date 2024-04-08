import './App.css';
import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography, TextField, Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" gutterBottom>
        Welcome to Sports Search
      </Typography>
      <header className="App-header">
        <div className="card-container">
          <Card variant="outlined" sx={{ width: '600px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardContent>
            <Typography 
              variant="button" 
              display="block"
              sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '60px', fontSize: 35 }}
               gutterBottom>
              LOGIN
            </Typography>
              <Stack
                component="form"
                sx={{ width: '100%', textAlign: 'center' }}
                spacing={3}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Username"
                  id="outlined-size-large"
                  size="large"
                  variant="outlined"
                  sx={{width: '400px', fontSize: 2000}}
                />
                <TextField
                  label="Password"
                  id="outlined-size-large"
                  size="large"
                  variant="outlined"
                  type="password"
                  sx={{width: '400px'}}
                />
                <CardActions> 
                  <Button
                    sx={{ fontSize: 15 }}
                    variant="text"
                    onClick={() => {
                      alert('Login clicked');
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ fontSize: 15 }}
                    variant="text"
                    onClick={() => {
                      alert('Create Account clicked');
                    }}
                  >
                    Create Account
                  </Button>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
