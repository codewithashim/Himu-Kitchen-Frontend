// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNgOyhoIR6UQjDZohKTsQABw5UGYRWsKk",
  authDomain: "himu-kitchen.firebaseapp.com",
  projectId: "himu-kitchen",
  storageBucket: "himu-kitchen.appspot.com",
  messagingSenderId: "1066267182855",
  appId: "1:1066267182855:web:8629d2a75966dcd39ba7a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
