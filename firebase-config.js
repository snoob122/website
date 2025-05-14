// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDSS43oUAQs-WbydM0a_U3_UQ2_0MF0F_s",

  authDomain: "database-f0f72.firebaseapp.com",

  projectId: "database-f0f72",

  storageBucket: "database-f0f72.firebasestorage.app",

  messagingSenderId: "207617972720",

  appId: "1:207617972720:web:2860b9156b4290f26fe535",

  measurementId: "G-CXK6LJT2NZ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);