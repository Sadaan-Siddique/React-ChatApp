// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfsuh1Q02WBMRYpCNIojN6TRHLpMxOdJg",
  authDomain: "react-firechat-e482a.firebaseapp.com",
  projectId: "react-firechat-e482a",
  storageBucket: "react-firechat-e482a.appspot.com",
  messagingSenderId: "913418312814",
  appId: "1:913418312814:web:86fee69e17d1c07143da7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)