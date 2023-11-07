import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";





export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)


    const userRegistration = ( email, password ) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = ( email, password ) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    
    const logInWithGoogle = () => {
        setLoader(true)
        return  signInWithRedirect(auth, provider)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (isUser) => {
            setUser(isUser)
            if (isUser) {
                setLoader(false)
                console.log("user logged in");

            } else {
                console.log("user logged out");
                setLoader(false)
            }
        });
        return unSubscribe;

    }, [])




    const AuthInfo = {
        loader,
        userRegistration,
        logIn,
        logInWithGoogle,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}