import { WrongLocation } from "@mui/icons-material";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; import { auth } from "../../firebase";

export const signUpApi = (data) => {
    console.log("signUpApi", data);

    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Check your email." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })

                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "Email id allready verified." });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signInApi = (data) => {
    console.log("signInApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                if (user.emailVerified) {
                    resolve({ payload: "SignIn succesfull" });
                } else {
                    resolve({ payload: "Please varify your email." });
                }
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: " Password was wrong." });
                } else if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "Email or password wrong." });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signOutApi = () => {
    console.log("signOutApi");

    return new Promise((resolve, reject) => {

        signOut(auth)
            .then(() => {
                resolve({ payload: "Sign-out successfull." })
            }).catch((error) => {
                reject({ payload: " Something wents Wrong." })
            });
    })
}

export const forgotApi = (data) => {
    console.log('forgotApi', data);
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Please check your email for reset password." })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // reject({ payload: errorCode })
                reject({ payload: " Something went wrong " });

            });
    })
}

export const googleSignInApi = () => {
    console.log("googleSignInApi");
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                resolve({ payload: user })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({ payload: errorCode })
            });
    })
}