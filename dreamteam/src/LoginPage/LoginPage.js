import React from 'react';
import '../App.css';
import { Card, CardActions, CardContent, Button, Typography, TextField, Stack } from '@mui/material';

function LoginPage({ setPage }) {
  
    const handleCreateAccountClick = () => {
      setPage('createAccount');
    };
  
    return (
      <div className="App">
        <Typography variant="h1" gutterBottom>
          Welcome to Sports Search!
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
                  spacing={5}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Username"
                    id="username-label-1"
                    size="large"
                    variant="outlined"
                    sx={{ width: '400px' }}
                  />
                  <TextField
                    label="Password"
                    id="password-label-1"
                    size="large"
                    variant="outlined"
                    type="password"
                    sx={{ width: '400px' }}
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
                      onClick={handleCreateAccountClick}
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

  export default LoginPage;