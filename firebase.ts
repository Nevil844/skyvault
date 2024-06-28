import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAxDrTcVgCi2v8Orbi8bEZyrp8SCro_pBw",
    authDomain: "skyvault-4aad6.firebaseapp.com",
    projectId: "skyvault-4aad6",
    storageBucket: "skyvault-4aad6.appspot.com",
    messagingSenderId: "83753893236",
    appId: "1:83753893236:web:ea249a3cb10b28beeec021"
};

const app=getApps().length ? getApp():initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);

export {db, storage};
