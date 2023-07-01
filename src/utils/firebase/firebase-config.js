import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCrO4olX7qlnWQf-fbIWP82FXi-oykvtFg",
  authDomain: "barn-house-c5822.firebaseapp.com",
  databaseURL: "https://barn-house-c5822-default-rtdb.firebaseio.com",
  projectId: "barn-house-c5822",
  storageBucket: "barn-house-c5822.appspot.com",
  messagingSenderId: "1089737112169",
  appId: "1:1089737112169:web:d1b29c969699e3fc9980f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
