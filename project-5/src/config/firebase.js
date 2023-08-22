// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIGUqz5ogZKByZSzUMEAgWlmQ1neWEVsM",
  authDomain: "vite-contact-8021a.firebaseapp.com",
  projectId: "vite-contact-8021a",
  storageBucket: "vite-contact-8021a.appspot.com",
  messagingSenderId: "825033558943",
  appId: "1:825033558943:web:88b845568e5658ba544baa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);