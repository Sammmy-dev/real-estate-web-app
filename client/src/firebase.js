// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "mern-estsate.firebaseapp.com",
  projectId: "mern-estsate",
  storageBucket: "mern-estsate.firebasestorage.app",
  messagingSenderId: "59611001967",
  appId: "1:59611001967:web:cdacfe41c5fd5fdcbbc99a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);