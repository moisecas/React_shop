import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyBw6AR1BqGGWAMkntBDULmaCOAJ_Iux9PE",
    authDomain: "shopcoder-8ab74.firebaseapp.com",
    databaseURL: "https://shopcoder-8ab74-default-rtdb.firebaseio.com",
    projectId: "shopcoder-8ab74",
    storageBucket: "shopcoder-8ab74.appspot.com",
    messagingSenderId: "45664403677",
    appId: "1:45664403677:web:1b9fbad38d3e87b9821b34"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage(); 

export { auth, db, storage }; 