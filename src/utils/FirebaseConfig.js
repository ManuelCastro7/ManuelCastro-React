import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "gamer-shop-53653.firebaseapp.com",
  projectId: "gamer-shop-53653",
  storageBucket: "gamer-shop-53653.appspot.com",
  messagingSenderId: "265657230175",
  appId: "1:265657230175:web:bb3e78a020642362488cea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);