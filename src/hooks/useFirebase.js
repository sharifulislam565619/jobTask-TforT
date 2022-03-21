import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializationAuth from "../firebase/firebase.init";


initializationAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    //google signIn
    const auth = getAuth();

    const signInWithGoogle = (navigate, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                //   saveUser(result.user.email, result.user.displayName, "PUT")
                navigate(location?.state?.from || '/home')

            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }

    // register email password
    const registerWithEmailPassword = (email, password, name, history, url) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                setError("")
                updateUserName(name)
                history?.push(url)
                window.location.reload();
            })
            .catch((error) => {
                setError(error.message
                )
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    // login email password
    const signInWithEmailPassword = (email, password, history, url) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setError("")
                history?.push(url)
                window.location.reload();
            })
            .catch(() => {
                setError("Enter your valid email password")
            })
            .finally(() => {
                setIsLoading(false)
            });
    }


    //update user
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            const newUser = { ...user, displayName: name }
            setUser(newUser)
        }).catch((error) => {
            setError(error)
        });
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

    }, [])



    // sign out
    const logOut = (history, uri) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            history?.push(uri)
            window.location.reload();
        }).catch((error) => {
            setError(error)
        })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // reset/forgot password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }

    return {
        signInWithGoogle, signInWithEmailPassword, user, error, isLoading, logOut, registerWithEmailPassword, resetPassword, setError, setUser
    }
};

export default useFirebase;