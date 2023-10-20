// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIZaVq3CCeLoSkgHG8kQ9LxoOAObtjj-g",
  authDomain: "taskloginform.firebaseapp.com",
  projectId: "taskloginform",
  storageBucket: "taskloginform.appspot.com",

  messagingSenderId: "69296883193",
  appId: "1:69296883193:web:512ee0a742a602a7c0e928",
  measurementId: "G-8XPY43503R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
