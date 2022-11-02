import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB1rAApiHdky_wQ7cH8orKMKRMmUrwjvKE",
    authDomain: "comentaki-jvmh.firebaseapp.com",
    projectId: "comentaki-jvmh",
    storageBucket: "comentaki-jvmh.appspot.com",
    messagingSenderId: "916163793623",
    appId: "1:916163793623:web:4eb2371d7f80b5fc5d9692"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase