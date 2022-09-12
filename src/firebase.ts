// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Cloud Firestore and get a reference to the service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuix8TNwmu0DQn8cEcKnK-fWYojVqwH7c",
  authDomain: "easykcal-3b67b.firebaseapp.com",
  projectId: "easykcal-3b67b",
  storageBucket: "easykcal-3b67b.appspot.com",
  messagingSenderId: "900615452234",
  appId: "1:900615452234:web:08f8f0e6080438437a58b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
