import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-7d5a3.firebaseapp.com",
  projectId: "drive-7d5a3",
  storageBucket: "drive-7d5a3.appspot.com",
  messagingSenderId: "798067686775",
  appId: "1:798067686775:web:7e83205c9cffb48c5b3572",
  measurementId: "G-XZML9MFV0B"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage };
