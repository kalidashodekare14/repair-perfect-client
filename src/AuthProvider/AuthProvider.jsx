import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const provider = new GoogleAuthProvider()


    const handleRegisterUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const handleLogoutUser = () => {
        return signOut(auth)
    }
    const handleGoogleUser = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })
    }, [user])


    const authInfo = { user, handleRegisterUser, handleLoginUser, updateProfileUser, handleLogoutUser, handleGoogleUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;