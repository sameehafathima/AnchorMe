import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration from the browser console
const firebaseConfig = {
  apiKey: "AIzaSyCa_gcEaxIgwhY7fVroGE21DI1inUjwjq4",
  authDomain: "anchorme-bec9a.firebaseapp.com",
  projectId: "anchorme-bec9a",
  storageBucket: "anchorme-bec9a.firebasestorage.app",
  messagingSenderId: "738023267591",
  appId: "1:738023267591:web:b1ac6f88327e26caefb9a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database and export it so other files can use it
export const db = getFirestore(app);