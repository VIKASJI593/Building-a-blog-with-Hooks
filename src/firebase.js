import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9WtVeyClk2U2cYgya62Mr0p6OPi6-jbs",
  authDomain: "react-hooks-blog-4c8c7.firebaseapp.com",
  projectId: "react-hooks-blog-4c8c7",
  storageBucket: "react-hooks-blog-4c8c7.appspot.com",
  messagingSenderId: "290878945192",
  appId: "1:290878945192:web:3281ee32e5a1a640728f9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
