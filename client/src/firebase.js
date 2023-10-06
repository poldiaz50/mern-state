// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-poldiaz.firebaseapp.com",
  projectId: "mern-state-poldiaz",
  storageBucket: "mern-state-poldiaz.appspot.com",
  messagingSenderId: "423656700087",
  appId: "1:423656700087:web:9eb71e69dbe804fc64b532"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);