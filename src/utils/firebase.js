// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9mPLNvi88bNjKOLGufWX7NOBfAhcaF38",
  authDomain: "netflixgpt-5149eqwerty.firebaseapp.com",
  projectId: "netflixgpt-5149eqwerty",
  storageBucket: "netflixgpt-5149eqwerty.firebasestorage.app",
  messagingSenderId: "268815773925",
  appId: "1:268815773925:web:bc501bfc7dfaf24d62e40c",
  measurementId: "G-RYY3GES13J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
