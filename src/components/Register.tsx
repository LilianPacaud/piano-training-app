import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from '../firebase';
import { TextField, Button, Modal } from '@mui/material';

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
}


const Register: React.FC<RegisterProps> = ({isOpen, onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(getAuth(firebase), email, password);
      // User signed in successfully
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
    <div className='loginModal'>
      <h2>Register</h2>
      <TextField label="Email" fullWidth value={email} onChange={(e: any) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button variant="contained" onClick={handleSignIn}>Register</Button>
    </div>
  </Modal>
  );
};

export default Register;
