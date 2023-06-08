import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sign in with google
    const googleProvider = new GoogleAuthProvider;
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign out user
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }


    // Observing the user
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })

        return ()=> {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;