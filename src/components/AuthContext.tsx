import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from '../firebase';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

interface User {
  email: string | null;
  uid: string | null;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Provide initial default value for AuthContext
const initialAuthContext: AuthContextType = {
    user: null,
    signIn: async () => {},
    signOut: async () => {},
  };

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const useAuth = () => {
    console.log(AuthContext)
  const context = useContext(AuthContext);
  console.log(context)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
    children: any;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(firebase),currentUser => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          uid: currentUser.uid,
          // Add other user properties here if needed
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(getAuth(firebase), email, password);
  };

  const signOut = async () => {
    await signOut()
  };

  const authContextValue: AuthContextType = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
