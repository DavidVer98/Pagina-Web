import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyD7Xw5XcyLoDfYkW87VxpNWvAQ8qLjoD5w",
        authDomain: "fir-vue-f0028.firebaseapp.com",
        databaseURL: "https://fir-vue-f0028.firebaseio.com",
        projectId: "fir-vue-f0028",
        storageBucket: "fir-vue-f0028.appspot.com",
        messagingSenderId: "746759903446",
        appId: "1:746759903446:web:c7053e0dce16241daed177"
    })
    .database()
