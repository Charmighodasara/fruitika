import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2lafZu_jXSp3642fAyNRWeuC0eFjBC3M",
  authDomain: "fruitika-54470.firebaseapp.com",
  projectId: "fruitika-54470",
  storageBucket: "fruitika-54470.appspot.com",
  messagingSenderId: "346555625664",
  appId: "1:346555625664:web:457e966381abcaaf36bd25",
  measurementId: "G-M4CN30FHQT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);