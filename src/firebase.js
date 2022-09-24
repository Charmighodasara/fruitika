import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE2YOEZlQt3AWHyotCJSrOKNMIpI0BlLI",
  authDomain: "e-frutikha.firebaseapp.com",
  projectId: "e-frutikha",
  storageBucket: "e-frutikha.appspot.com",
  messagingSenderId: "491089046900",
  appId: "1:491089046900:web:fc148cae4ddc8ddb0ed021",
  measurementId: "G-SJ6DY4SVMP"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyC2lafZu_jXSp3642fAyNRWeuC0eFjBC3M",
//   authDomain: "fruitika-54470.firebaseapp.com",
//   projectId: "fruitika-54470",
//   storageBucket: "fruitika-54470.appspot.com",
//   messagingSenderId: "346555625664",
//   appId: "1:346555625664:web:457e966381abcaaf36bd25",
//   measurementId: "G-M4CN30FHQT"
// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);