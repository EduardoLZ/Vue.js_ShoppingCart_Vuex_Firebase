import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };
