import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

// Elements
const authSection = document.getElementById("authSection");
const welcomeSection = document.getElementById("welcomeSection");
const userName = document.getElementById("userName");
const googleSignInBtn = document.getElementById("googleSignIn");
const emailSignInBtn = document.getElementById("emailSignIn");
const emailSignUpBtn = document.getElementById("emailSignUp");
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
        userName.textContent = user.displayName || user.email || "User";
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