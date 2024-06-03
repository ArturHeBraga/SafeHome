
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAu9gApf66_1X9b1jTRaMonN1PeFei1l8U",
    authDomain: "safehome-3798f.firebaseapp.com",
    projectId: "safehome-3798f",
    storageBucket: "safehome-3798f.appspot.com",
    messagingSenderId: "520840405365",
    appId: "1:520840405365:web:cacd58e98957c935f5733c",
    measurementId: "G-JTNENM1WN0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
