// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBaEUaSjgkX9ILmmdIe6f_5MpiM0DhuXM",
    authDomain: "buildrop.firebaseapp.com",
    projectId: "buildrop",
    storageBucket: "buildrop.appspot.com",
    messagingSenderId: "679868241377",
    appId: "1:679868241377:web:b54501030012f56a016ea0",
    measurementId: "G-M8W2PYH6X3"
};
// Initializing firebase
const firebase = initializeApp(firebaseConfig);
// Intializing firebase auth provider;
const provider = new GoogleAuthProvider();

// whenever a user intereacts with the provider, we force them to select an acount
provider.setCustomParameters({
    promt: "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const isLoggedIn = () =>  {
    if (!user) {
        return res.status(401).send('Unauthorized');
    } else {
    req.currentUser = user;
    next(); // User is logged in - Pass to next route handler/middleware
    }
}