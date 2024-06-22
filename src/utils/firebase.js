// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBag6ggyNmBuxr3YOChnG9feB5IHOFpai8",
  authDomain: "app-3a4c5.firebaseapp.com",
  projectId: "app-3a4c5",
  storageBucket: "app-3a4c5.appspot.com",
  messagingSenderId: "690851792770",
  appId: "1:690851792770:web:2394aae6f46ad02e59319b",
  measurementId: "G-SFQT5DPGHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);