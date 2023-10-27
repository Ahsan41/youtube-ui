import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6tVSP5kjlBXQjDes1lDEi-OsrM_Kjo34",
  authDomain: "fir-c8732.firebaseapp.com",
  projectId: "fir-c8732",
  storageBucket: "fir-c8732.appspot.com",
  messagingSenderId: "433672135866",
  appId: "1:433672135866:web:6c1bd39606b711fd070e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()


export default app;