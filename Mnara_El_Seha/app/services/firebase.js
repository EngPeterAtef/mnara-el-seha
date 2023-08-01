/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMnDYCARsU4j9tWB6nd0cvlK_oIDIdtWI",
  authDomain: "manara-el-seha.firebaseapp.com",
  projectId: "manara-el-seha",
  storageBucket: "manara-el-seha.appspot.com",
  messagingSenderId: "845463856292",
  appId: "1:845463856292:web:8797e0acb81e1227f1b231",
  measurementId: "G-QJWBLRMTD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/
import * as firebase from 'firebase';
// import { initializeApp } from 'firebase/app';

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  console.log(app);
}

export default firebase;
