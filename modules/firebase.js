import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth , signInWithEmailAndPassword, onAuthStateChanged,createUserWithEmailAndPassword , signOut} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyBP4G8lTFcBtp_KZ1tdJq0PmW5KyyqtihQ",
  authDomain: "finalfire-f3ffa.firebaseapp.com",
  projectId: "finalfire-f3ffa",
  storageBucket: "finalfire-f3ffa.appspot.com",
  messagingSenderId: "958680456696",
  appId: "1:958680456696:web:2d0d1e93113d1e8ee18a0d",
  measurementId: "G-Y5L7JLKCK7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export const login = async ({email , password}) => {
    try {
        const {user : {accessToken}} = await signInWithEmailAndPassword(auth , email , password );
        return {
            success : true,
            accessToken
        }
    } 
    catch (error) {
        console.log(error);
        return{
            success : false,
            error
        }
    }
}

export const guard = (callback) => {
    onAuthStateChanged(auth, (user)=> {
        if (user) return 
        location.href = callback
    })
}

export const logout = async () => {
    try {
        await signOut(auth)
        return {
            success : true
        }

    } catch (error) {
        return{
            success : false,
            error
        }
    }
}


export const signup = async ({email , password}) => {

    try {
        const {user : {uid}} = await createUserWithEmailAndPassword(auth , email , password);
        return {
            success : true,
            uid
        } 
    }
    catch (error) {
        return {
            success : true,
            error
        } 
    }
}

