import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, User } from "firebase/auth";
import firebase from '../firebase';
import { TextField, Modal,Button } from '@mui/material';
import Register from './Register';
import google from '../images/Google__G__logo.svg.png';


interface LoginProps {
  onLogin: (user: User) => void;
  loginIsOpen: boolean;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  onClose: () => void;
}


const Login: React.FC<LoginProps> = ({onLogin, loginIsOpen, setIsLoginModalOpen, onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(getAuth(firebase), email, password);
      setIsLoginModalOpen(false)
      const loggedInUser = userCredential.user;
      onLogin(loggedInUser); 
      // User signed in successfully
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleOpenModal = async () => {
    // setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(false);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(getAuth(), provider);
      setIsLoginModalOpen(false)
      const loggedInUser = userCredential.user;
      onLogin(loggedInUser); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={loginIsOpen} onClose={onClose}>
      <div className='loginModal'>
        <h2>Login</h2>
        <TextField label="Email" fullWidth value={email} onChange={(e: any) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="contained" onClick={handleSignIn}>Login</Button>
        <a className='register' onClick={handleOpenModal}>Register</a>
        <Register isOpen={isRegisterModalOpen} onClose={handleCloseModal}/>
        <Button style={{ color: 'red' }} onClick={handleGoogleSignIn}>Login with Google  <img src={google} style={{width: "15px", marginLeft: "5px"}}/></Button>
      </div>
    </Modal>
  );
};

export default Login;
