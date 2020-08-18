const firebase = require('firebase/app')

// Config file
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
}
console.log(!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app())

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()