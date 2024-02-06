// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-390c4.firebaseapp.com",
  projectId: "mern-estate-390c4",
  storageBucket: "mern-estate-390c4.appspot.com",
  messagingSenderId: "1082871288450",
  appId: "1:1082871288450:web:18b0abdb93c25caf359a9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);