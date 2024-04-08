// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx5UWeeAeKANJilirXt53J4s7EHn7Mcnk",
  authDomain: "celestial-residence.firebaseapp.com",
  projectId: "celestial-residence",
  storageBucket: "celestial-residence.appspot.com",
  messagingSenderId: "879937047702",
  appId: "1:879937047702:web:902a1abf5b5741f30dc6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);