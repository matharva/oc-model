import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0LMTTrz5yyTleoXCTLJV5rMwEsLO0AXc",
  authDomain: "oc-three3.firebaseapp.com",
  projectId: "oc-three3",
  storageBucket: "oc-three3.appspot.com",
  messagingSenderId: "644107277997",
  appId: "1:644107277997:web:61bcf0d99eb3050b4f9824",
  measurementId: "G-EQ3N3ZLWVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
