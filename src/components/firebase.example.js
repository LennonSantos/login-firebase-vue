import Firebase from 'firebase'

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

Firebase.initializeApp(config);

// login with google
// https://firebase.google.com/docs/auth/web/start
export const provider = new Firebase.auth.GoogleAuthProvider();

export const auth = new Firebase.auth();