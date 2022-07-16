// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ2PcEebtZtqeB092UHHtk8b91e_LvZpc",
    authDomain: "lobbing-realtime-sheet.firebaseapp.com",
    databaseURL: "https://lobbing-realtime-sheet-default-rtdb.firebaseio.com",
    projectId: "lobbing-realtime-sheet",
    storageBucket: "lobbing-realtime-sheet.appspot.com",
    messagingSenderId: "545682860043",
    appId: "1:545682860043:web:d2a260a2d685d2f5813f0e",
    measurementId: "G-06XRBTLWHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);