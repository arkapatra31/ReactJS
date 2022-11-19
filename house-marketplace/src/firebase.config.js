import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATV3NDoC6R2WJhJsg0Nthg9ScBDI1xjEg",
  authDomain: "housing-marketplace-eb947.firebaseapp.com",
  projectId: "housing-marketplace-eb947",
  storageBucket: "housing-marketplace-eb947.appspot.com",
  messagingSenderId: "795076950293",
  appId: "1:795076950293:web:bcb1ab64e70d7797b5d11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();