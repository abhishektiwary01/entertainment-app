// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuEKV9bLzIP-uM17SOzhuzZbFddD021UE",
  authDomain: "entertainment-app-f3285.firebaseapp.com",
  projectId: "entertainment-app-f3285",
  storageBucket: "entertainment-app-f3285.appspot.com",
  messagingSenderId: "661508254633",
  appId: "1:661508254633:web:43b8d8935698707da572b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Firebase Auth instance
export const auth = getAuth();
export default app;
