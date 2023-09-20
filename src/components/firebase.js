import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbBSN5hgLSAtfPG9pb3W33NkWSOYT_Auc",
  authDomain: "sign-in-12e53.firebaseapp.com",
  projectId: "sign-in-12e53",
  storageBucket: "sign-in-12e53.appspot.com",
  messagingSenderId: "1010340046699",
  appId: "1:1010340046699:web:c16b0ec18247a577b6ce2e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;