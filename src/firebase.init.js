// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRlP_JGwbSIGuIzyqr7hqBAMtaGrTOLQo",
    authDomain: "e-smart-inventory.firebaseapp.com",
    projectId: "e-smart-inventory",
    storageBucket: "e-smart-inventory.appspot.com",
    messagingSenderId: "453055154597",
    appId: "1:453055154597:web:0614d509ae61251466004c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;