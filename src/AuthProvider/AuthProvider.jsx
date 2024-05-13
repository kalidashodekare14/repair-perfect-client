import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    const provider = new GoogleAuthProvider()


    const handleRegisterUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLoginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const handleLogoutUser = () => {
        setLoader(true)
        return signOut(auth)
    }
    const handleGoogleUser = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const logginUser = { email: userEmail }
            setUser(currentUser)
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, logginUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else {
                axios.post(`http://localhost:5000/logout`, logginUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            setLoader(false)
        })
    }, [user])


    const authInfo = { user, loader, handleRegisterUser, handleLoginUser, updateProfileUser, handleLogoutUser, handleGoogleUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;