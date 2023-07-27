import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBxkDVWwc706peUD9dMSHrjD6jFzJL11g",
  authDomain: "nebula-ecommerce-c8397.firebaseapp.com",
  projectId: "nebula-ecommerce-c8397",
  storageBucket: "nebula-ecommerce-c8397.appspot.com",
  messagingSenderId: "1024703360383",
  appId: "1:1024703360383:web:b7767c7c831d30a1dcbe4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)