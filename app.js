// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8voFVa37yUQqppa610sOKjykoeLv7lLg",
  authDomain: "evinton-b93d2.firebaseapp.com",
  projectId: "evinton-b93d2",
  storageBucket: "evinton-b93d2.appspot.com",
  messagingSenderId: "703584679018",
  appId: "1:703584679018:web:880ab6997468479f200613",
  measurementId: "G-JXKT3TWMDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);