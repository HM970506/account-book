import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:  process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_APP,
  databaseURL: process.env.REACT_APP_URL,
};

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// export default app;

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore= getFirestore(app);

export default firestore;