import './App.css';
import * as React from 'react';
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
                  id="outlined-size-large"
                  size="large"
                  variant="outlined"
                  sx={{ width: '400px' }}
                />
                <TextField
                  label="Password"
                  id="outlined-size-large"
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
                  id="outlined-size-large"
                  size="large"
                  variant="outlined"
                  sx={{ width: '400px' }}
                />
                <TextField
                  label="Create Password"
                  id="outlined-size-large"
                  size="large"
                  variant="outlined"
                  type="password"
                  sx={{ width: '400px' }}
                />
                <TextField
                  label="Confirm Password"
                  id="outlined-size-large"
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

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <div className="App">
      {page === 'login' && <LoginPage setPage={setPage} />}
      {page === 'createAccount' && <CreateAccountPage setPage={setPage} />}
    </div>
  );
}

export default App;
