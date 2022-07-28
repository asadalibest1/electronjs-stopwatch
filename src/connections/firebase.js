import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
    API_KEY,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
} from '../environmentalVariables';

const firebaseConfig = {
    apiKey: API_KEY || "",
    authDomain: authDomain || "",
    databaseURL: databaseURL || "",
    projectId: projectId || "",
    storageBucket: storageBucket || "",
    messagingSenderId: messagingSenderId || "",
    appId: appId || "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const db = getFirestore(app);
