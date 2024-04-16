import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userPhoto, setUserPhoto] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)                       
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('still not getting it', currentUser);
            setUser(currentUser)
        })
        return() => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
            user, 
            setUser,
            createUser,
            logIn,
            logOut,
            googleLogin,
            googleProvider,
            userPhoto, 
            setUserPhoto,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;