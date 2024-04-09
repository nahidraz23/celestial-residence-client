import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../FirebaseConfig/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    //Create User using email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //SignIn user using email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Google login using pop-up
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //Gihub login using pop-up
    const gitHubProvider = new GithubAuthProvider();

    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider);
    }


    const authInfo = {
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,

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