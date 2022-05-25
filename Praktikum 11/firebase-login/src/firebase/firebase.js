import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    // Your config values
    apiKey: "AIzaSyAEdsEriS27DkWdITqubsDKkQc6qbuBu1w",
    authDomain: "fir-login-ed94d.firebaseapp.com",
    projectId: "fir-login-ed94d",
    storageBucket: "fir-login-ed94d.appspot.com",
    messagingSenderId: "953330046163",
    appId: "1:953330046163:web:53680dfd3893a0ebd13026",
    measurementId: "G-J1EDXVMWJM"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;