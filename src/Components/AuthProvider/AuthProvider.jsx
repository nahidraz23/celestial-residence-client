import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Create User using email and password
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //SignIn user using email and password
    const signInUser = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Google login using pop-up
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {e
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //Gihub login using pop-up
    const gitHubProvider = new GithubAuthProvider();

    const gitHubLogin = () => {
        // setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    //Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])

    //Sign out user
    const signOutUser = () => {
        // setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        signOutUser,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}