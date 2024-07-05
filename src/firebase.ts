import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBlDElxVJPRrI8qqJKMjdIySkS9OECSTUo",
    authDomain: "piano-training-1b0a7.firebaseapp.com",
    projectId: "piano-training-1b0a7",
    storageBucket: "piano-training-1b0a7.appspot.com",
    messagingSenderId: "512584094840",
    appId: "1:512584094840:web:28fdacff37a9122439498d"
  };
  
const firebase = initializeApp(firebaseConfig);

export default firebase;