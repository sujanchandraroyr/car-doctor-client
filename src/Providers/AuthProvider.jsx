import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loadUser, setLoadUser] = useState(true);
    

    //create user
    const createUser = (email, password) => {
        setLoadUser(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //LoginUsr
    const loginUser = (email, password) => {
        setLoadUser(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //LogOutUser
    const logOutUser = () => {
        setLoadUser(true)
        return signOut(auth)

    }

    //observe
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, (curentUser) => {
           if(curentUser){
            setUser(curentUser)
            setLoadUser(false)
           }
           else{
            setUser(null)
            setLoadUser(false)
           }
        })
        return () => {
            return unsubScribe();
        }
    },[])

    const authInfo = {
        user,
        loadUser,
        createUser,
        loginUser,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;