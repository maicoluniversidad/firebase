// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYvRZoEwuQulGzBlQl2hIUXbat5F3e8CM",
  authDomain: "pokeapi-d6818.firebaseapp.com",
  projectId: "pokeapi-d6818",
  storageBucket: "pokeapi-d6818.firebasestorage.app",
  messagingSenderId: "58096472788",
  appId: "1:58096472788:web:e952d5d0ee78fbb5fce141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);