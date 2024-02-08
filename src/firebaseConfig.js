// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7aJ1SY3rqiqFUAAdXGNcqpTrtZDZ3XC8",
  authDomain: "linkedin-clone-329c6.firebaseapp.com",
  projectId: "linkedin-clone-329c6",
  storageBucket: "linkedin-clone-329c6.appspot.com",
  messagingSenderId: "223796458450",
  appId: "1:223796458450:web:b9d290c24fca081e7d0e0b",
  measurementId: "G-X7EMKR99EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };