// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVeLVEl3wzRkozn1XmViVajOEBhaVZ2Xs",
  authDomain: "truck-queue-app.firebaseapp.com",
  projectId: "truck-queue-app",
  storageBucket: "truck-queue-app.firebasestorage.app",
  messagingSenderId: "724204821916",
  appId: "1:724204821916:web:c0ed4049058427833cbc59",
  measurementId: "G-GWRP2Q1MX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
