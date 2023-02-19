import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBtGM5klr2wHvYblK3HJ3zj9SRCMla9yZQ",
    authDomain: "react-hooks-blog-21851.firebaseapp.com",
    projectId: "react-hooks-blog-21851",
    storageBucket: "react-hooks-blog-21851.appspot.com",
    messagingSenderId: "812618297499",
    appId: "1:812618297499:web:ffcd624aa138b417d2963e"
  };
  


  export const firestore = firebase.firestore();
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);