import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCW7N5-J_-2V-j7fiEuwlQxJaEg0ojQouY",
  authDomain: "chat-app-63490.firebaseapp.com",
  projectId: "chat-app-63490",
  storageBucket: "chat-app-63490.appspot.com",
  messagingSenderId: "121993339194",
  appId: "1:121993339194:web:5f5b29005b4e3ca6a33003",
  measurementId: "G-MP8G9S78Z4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)