
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyCqvV0R1sSwSoLjn9zLtg55JK04lt8lIyU",
  authDomain: "debate-app-c70c6.firebaseapp.com",
  projectId: "debate-app-c70c6",
  storageBucket: "debate-app-c70c6.appspot.com",
  messagingSenderId: "1032829466524",
  appId: "1:1032829466524:web:d776e306ca73b0ebee3a59",
  measurementId: "G-SRKFNP72EJ"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
const analytics = getAnalytics(app);