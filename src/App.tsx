import React, { useState } from 'react';
import './App.css';
import Sheet from './components/Sheet';
import Notes from './components/Notes';
import { getRandomInt } from './utils/utils';
import Login from './components/Login';
import { AuthProvider, useAuth } from './components/AuthContext';
import { getAuth, User } from 'firebase/auth';
import { Button } from '@mui/material';



function App() {
  const [count, setCount] = useState(getRandomInt(5));
  const [countResult, setCountResult] = useState(0)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleOpenModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogin = (loggedInUser: User) => {
    console.log(loggedInUser)
    setUser(loggedInUser);
  };


  const handleLogout = async () => {
    try {
      await getAuth().signOut();
      setUser(null)
    } catch (error) {
      throw error;
    }
  };


  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <nav className="header">
            <ul>
              {user ? (
              <>
                <Button onClick={handleLogout}>Logout</Button>
                <h2>Welcome, {user.displayName}</h2>
                <div/>
              </>
              ) : (
                <li className='login' onClick={handleOpenModal}><Button>Login</Button></li>
              )}
              
            </ul>
          </nav>
        
          <Login onLogin={handleLogin} loginIsOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} onClose={handleCloseModal} />
          <Sheet count={count}/>
          <Notes count={count} setCount={setCount} countResult={countResult} setCountResult={setCountResult}/>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
