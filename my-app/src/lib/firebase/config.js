

// Import fungsi yang diperlukan dari SDKs yang Anda butuhkan
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCE00q9wjvsJsHD19LVFj1TlhPsikwWnK8",
//   authDomain: "habitsaga-app.firebaseapp.com",
//   projectId: "habitsaga-app",
//   storageBucket: "habitsaga-app.firebasestorage.app",
//   messagingSenderId: "1065719342666",
//   appId: "1:1065719342666:web:960b5d88e870c2ce6d28b3"
// };

// Konfigurasi Firebase Anda, diambil dari environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Inisialisasi Firebase
// Cek apakah aplikasi sudah diinisialisasi untuk menghindari error
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };