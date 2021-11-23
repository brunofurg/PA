// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuCJlEBfv0huHsMNi_EVl0kv1jVEw7JsI",
  authDomain: "portonatela-bsd.firebaseapp.com",
  databaseURL: "https://portonatela-bsd-default-rtdb.firebaseio.com",
  projectId: "portonatela-bsd",
  storageBucket: "portonatela-bsd.appspot.com",
  messagingSenderId: "79775848788",
  appId: "1:79775848788:web:51fa1d986b7a61e4e610c1",
  measurementId: "G-3HMXM8Y691",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
