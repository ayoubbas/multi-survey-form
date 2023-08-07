import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 

const firebaseConfig = {
  apiKey: "AIzaSyByZpH37jlsu1UUyuUWgMSBDZD_0eX00Oc",
  authDomain: "surveyform-ecaf8.firebaseapp.com",
  projectId: "surveyform-ecaf8",
  storageBucket: "surveyform-ecaf8.appspot.com",
  messagingSenderId: "362130446849",
  appId: "1:362130446849:web:420088720a26e18d30be00",
  measurementId: "G-3W8K89WLC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const myConfig =  firebaseConfig