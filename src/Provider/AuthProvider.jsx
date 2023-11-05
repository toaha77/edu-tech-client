import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../config/firebase.config";
  
export const AuthContext = createContext(null)
const auth= getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, provider);
    };
  
  
   const createUser = (email, password) =>{
    setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
   }
  
   const handleProfile =(name,photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
   }
   const logOut =() =>{
    return signOut(auth)
   }
   const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
  
       })
       return ()=>{
        unSubscribe()
       }
   }, [])
    const AuthInfo = {
      googleLogin,
      createUser,
       signIn,
       logOut,
       handleProfile,
       user,
       loading
    };
  
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;