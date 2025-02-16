import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIhu9UsJ7axC9ZfU_lFl2zFNQZxjog8ss",
    authDomain: "infiniteblog-7455e.firebaseapp.com",
    projectId: "infiniteblog-7455e",
    storageBucket: "infiniteblog-7455e.firebasestorage.app",
    messagingSenderId: "175173497555",
    appId: "1:175173497555:web:9387d2157608062e881a26",
    measurementId: "G-V070FEE0JG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
