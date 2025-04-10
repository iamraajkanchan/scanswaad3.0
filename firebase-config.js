// ✅ Correct config for browser-based projects
const firebaseConfig = {
  apiKey: "AIzaSyAXSrdwDDe8Gg6DCjQ_bPSXu-Sh8whPYsE",
  authDomain: "scanswaad-28922.firebaseapp.com",
  projectId: "scanswaad-28922",
  storageBucket: "scanswaad-28922.appspot.com", // ✅ fixed
  messagingSenderId: "677748245747",
  appId: "1:677748245747:web:3b893e0d07812121aae386"
};

// ✅ Initialize Firebase (for browser CDN usage)
firebase.initializeApp(firebaseConfig);
