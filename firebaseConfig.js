// ✅ Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOQYpChCgaVuA21jauKTeC9GakZ_GBUOI",
    authDomain: "ambulancecall-87335.firebaseapp.com",
    projectId: "ambulancecall-87335",
    storageBucket: "ambulancecall-87335.appspot.com",
    messagingSenderId: "1091554496483",
    appId: "1:1091554496483:web:47a6dba2f6585446b75ad6",
    measurementId: "G-YLGTRMWP51"
};

// ✅ Initialize Firebase globally
firebase.initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication globally
const auth = firebase.auth();

console.log("🔥 Firebase initialized successfully");