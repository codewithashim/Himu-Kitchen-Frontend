import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.Config";
import Swal from "sweetalert2";
const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // =================== google login  ===================
  const googleLoginProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // =================== Facebook login  ===================
  const facebookLoginProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // ==================== Email Sign Up ====================

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ==================== Email Sign In ====================
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserDetails = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // ==================== Sign Out ====================
  const logout = () => {
    localStorage.removeItem("token");
    setLoading(true);
    signOut(auth)
      .then(() => {
        setLoading(true);
        // Sign-out successful.
        Swal.fire("Succesfully Logout!", "You clicked the button!", "success");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        Swal.fire("Error!", "You clicked the button!", "error");
      });
  };
  // ==================== Reset Password ====================

  // ==================== Update Email ====================
  // ==================== Watcher ====================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //====================== =========================
  const authInfo = {
    user,
    googleLoginProvider,
    facebookLoginProvider,
    error,
    setError,
    logout,
    loading,
    setLoading,
    signInUser,
    createUser,
    updateUserDetails,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
