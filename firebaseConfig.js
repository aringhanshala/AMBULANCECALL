import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Firebase configuration (Restrict API Key in Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDOQYpChCgaVuA21jauKTeC9GakZ_GBUOI",
    authDomain: "ambulancecall-87335.firebaseapp.com",
    projectId: "ambulancecall-87335",
    storageBucket: "ambulancecall-87335.appspot.com",
    messagingSenderId: "1091554496483",
    appId: "1:1091554496483:web:47a6dba2f6585446b75ad6",
    measurementId: "G-YLGTRMWP51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set authentication persistence
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("✅ Authentication persistence set to local.");
    })
    .catch((error) => {
        console.error("❌ Error setting persistence:", error);
    });

// Ensure reCAPTCHA compatibility
auth.languageCode = "en"; // Set language for reCAPTCHA (optional)
console.log("🔥 Firebase initialized successfully");

// Export Firebase instances
export { app, auth, db };