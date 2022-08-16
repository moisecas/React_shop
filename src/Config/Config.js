import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 


const firebaseConfig = {
    apiKey: "AIzaSyBw6AR1BqGGWAMkntBDULmaCOAJ_Iux9PE",
    authDomain: "shopcoder-8ab74.firebaseapp.com",
    databaseURL: "https://shopcoder-8ab74-default-rtdb.firebaseio.com",
    projectId: "shopcoder-8ab74",
    storageBucket: "shopcoder-8ab74.appspot.com",
    messagingSenderId: "45664403677",
    appId: "1:45664403677:web:1b9fbad38d3e87b9821b34"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { storage,auth, db }; 