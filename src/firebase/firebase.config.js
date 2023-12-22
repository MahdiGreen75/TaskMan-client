// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCowW-axYMk8VzoP5663jWbFfEdprrY1zc",
    authDomain: "taskman-1d9c8.firebaseapp.com",
    projectId: "taskman-1d9c8",
    storageBucket: "taskman-1d9c8.appspot.com",
    messagingSenderId: "935778171837",
    appId: "1:935778171837:web:f0f66b86a28b15741e70d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth;