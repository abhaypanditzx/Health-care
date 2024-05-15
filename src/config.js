import firebase from "firebase/compat/app"; // Import the compat version for backward compatibility
import "firebase/compat/messaging"; // Import Firebase messaging module

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg6f-acGusUXB1lcFx5RMfMlckjiJAqhg",
  authDomain: "my-schedule-1e649.firebaseapp.com",
  projectId: "my-schedule-1e649",
  storageBucket: "my-schedule-1e649.appspot.com",
  messagingSenderId: "557767864665",
  appId: "1:557767864665:web:4326d6566e7835ae4f9c48",
  measurementId: "G-MGNZRWMW64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export initialized Firebase instance
export default firebase;
