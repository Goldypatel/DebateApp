// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmLOmNUUQ0edtHIxVgQY06PddSp6Rk1GE",
  authDomain: "debate-web.firebaseapp.com",
  projectId: "debate-web",
  storageBucket: "debate-web.appspot.com",
  messagingSenderId: "1068831558574",
  appId: "1:1068831558574:web:b68a68bfdc44633552d63f",
  measurementId: "G-0F1YLTNTFM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();