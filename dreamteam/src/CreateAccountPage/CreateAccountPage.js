import React from 'react';
import '../App.css';
import { Card, CardActions, CardContent, Button, Typography, TextField, Stack } from '@mui/material';

function CreateAccountPage({ setPage }) {
    
    const handleBackClick = () => {
      setPage('login');
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <div className="card-container">
            <Card variant="outlined" sx={{ width: '600px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CardContent>
                <Typography 
                  variant="button" 
                  display="block"
                  sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '60px', fontSize: 35 }}
                  gutterBottom>
                  Create Account
                </Typography>
                <Stack
                  component="form"
                  sx={{ width: '100%', textAlign: 'center' }}
                  spacing={5}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Create Username"
                    id="username-label"
                    size="large"
                    variant="outlined"
                    sx={{ width: '400px' }}
                  />
                  <TextField
                    label="Create Password"
                    id="password-label"
                    size="large"
                    variant="outlined"
                    type="password"
                    sx={{ width: '400px' }}
                  />
                  <TextField
                    label="Confirm Password"
                    id="confirm-label"
                    size="large"
                    variant="outlined"
                    type="password"
                    sx={{ width: '400px' }}
                  />
                  <CardActions> 
                    <Button
                      sx={{ fontSize: 15 }}
                      variant="text"
                      onClick={handleBackClick}
                    >
                      Back to Login
                    </Button>
                    <Button
                      sx={{ fontSize: 15 }}
                      variant="text"
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

  export default CreateAccountPage;