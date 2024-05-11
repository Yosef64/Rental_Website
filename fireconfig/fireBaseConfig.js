// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfME_dB5ehKSPF9BXl0ChgQikHXXWPJws",
  authDomain: "rent-ffb49.firebaseapp.com",
  projectId: "rent-ffb49",
  storageBucket: "rent-ffb49.appspot.com",
  messagingSenderId: "823608879567",
  appId: "1:823608879567:web:52eecd1547dfcd1b7fcaba",
};
const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();
auth.languageCode= 'en';
// const analytics = getAnalytics();
export { db, storage,provider,auth };
