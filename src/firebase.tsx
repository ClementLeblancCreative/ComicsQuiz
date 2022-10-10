// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3xSOBwY3q_6NUHsWONUpD3BHSkY9e35Y",
  authDomain: "comicquiz-663f5.firebaseapp.com",
  projectId: "comicquiz-663f5",
  storageBucket: "comicquiz-663f5.appspot.com",
  messagingSenderId: "603678313496",
  appId: "1:603678313496:web:88085294252fd8d000476d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app