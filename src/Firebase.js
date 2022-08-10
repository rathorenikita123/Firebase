import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyBX6_G_eod2zUByCvVz83kVVovZS0KFWCE",
    authDomain: "solruf-a934f.firebaseapp.com",
    projectId: "solruf-a934f",
    storageBucket: "solruf-a934f.appspot.com",
    messagingSenderId: "156684769874",
    appId: "1:156684769874:web:32b3471b35925dea4edd8b",
    measurementId: "G-DY81NDBF0Y"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


