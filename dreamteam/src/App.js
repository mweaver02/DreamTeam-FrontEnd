import './App.css';
import * as React from 'react';
import LoginPage from './LoginPage/LoginPage';
import CreateAccountPage from './CreateAccountPage/CreateAccountPage';

function App() {
  const [page, setPage] = React.useState('login');
  //const [password, setPassword] = React.useState();

  return (
    <div className="App">
      {page === 'login' && <LoginPage setPage={setPage} />}
      {page === 'createAccount' && <CreateAccountPage setPage={setPage} />}
    </div>
  );
}

export default App;
