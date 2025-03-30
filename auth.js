import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

// Elements
const authSection = document.getElementById("authSection");
const welcomeSection = document.getElementById("welcomeSection");
const userName = document.getElementById("userName");
const googleSignInBtn = document.getElementById("googleSignIn");
const emailSignInBtn = document.getElementById("emailSignIn");
const emailSignUpBtn = document.getElementById("emailSignUp");
const phoneSignInBtn = document.getElementById("phoneSignIn");
const signOutBtn = document.getElementById("signOut");
const bookingSection = document.getElementById("bookingSection");

// Google Sign-In
if (googleSignInBtn) {
    googleSignInBtn.addEventListener("click", () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                updateUI(result.user);
            })
            .catch((error) => {
                showError(error.message);
            });
    });
}

// Email/Password Sign-In
if (emailSignInBtn) {
    emailSignInBtn.addEventListener("click", () => {
        const email = prompt("Enter your email:");
        const password = prompt("Enter your password:");
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    updateUI(result.user);
                })
                .catch((error) => {
                    showError(error.message);
                });
        }
    });
}

// Email/Password Sign-Up
if (emailSignUpBtn) {
    emailSignUpBtn.addEventListener("click", () => {
        const email = prompt("Enter your email:");
        const password = prompt("Enter your password:");
        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    updateUI(result.user);
                })
                .catch((error) => {
                    showError(error.message);
                });
        }
    });
}

// Phone Authentication
if (phoneSignInBtn) {
    phoneSignInBtn.addEventListener("click", () => {
        const phoneNumber = prompt("Enter your phone number (with country code):");
        if (phoneNumber) {
            // Set up reCAPTCHA
            window.recaptchaVerifier = new RecaptchaVerifier("phoneSignIn", {
                size: "invisible",
                callback: (response) => {
                    console.log("reCAPTCHA verified");
                },
            }, auth);

            const appVerifier = window.recaptchaVerifier;

            // Send OTP
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    const otp = prompt("Enter the OTP sent to your phone:");
                    if (otp) {
                        confirmationResult.confirm(otp)
                            .then((result) => {
                                updateUI(result.user);
                            })
                            .catch((error) => {
                                showError("Invalid OTP. Please try again.");
                            });
                    }
                })
                .catch((error) => {
                    showError(error.message);
                });
        }
    });
}

// Sign Out
if (signOutBtn) {
    signOutBtn.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                resetUI();
            })
            .catch((error) => {
                showError(error.message);
            });
    });
}

// Update UI after login
function updateUI(user) {
    if (user) {
        authSection.style.display = "none";
        welcomeSection.style.display = "block";
        bookingSection.style.display = "block";
        userName.textContent = user.displayName || user.phoneNumber || user.email || "User";
    }
}

// Reset UI after logout
function resetUI() {
    authSection.style.display = "block";
    welcomeSection.style.display = "none";
    bookingSection.style.display = "none";
}

// Show Error Message
function showError(message) {
    alert(`Error: ${message}`);
}