// import admin from 'firebase-admin'
const firebase = require('firebase/app')
// Your web app's Firebase configuration

// const privateKey = process.env.PRIVATEKEY.replace(/\\n/g, '\n')
// const serviceAccount = {
//     "project_id": process.env.PROJECTID,
//     "private_key": privateKey,
//     "client_email": process.env.CLIENTEMAIL,
// }

// try {
//     admin.initializeApp({
//         credential: admin.credential.cert(serviceAccount),
//         databaseURL: "https://nextjs-e33e1.firebaseio.com"
//     })
// } catch (error) {
//     /*
//      * We skip the "already exists" message which is
//      * not an actual error when we're hot-reloading.
//      */
//     if (!/already exists/u.test(error.message)) {
//         // eslint-disable-next-line no-console
//         console.error('Firebase admin initialization error', error.stack)
//     }
// }

// export default admin


// Config file
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.APIKEY,
}

if (firebase.apps.length) {
    firebase.app()
} else {
    firebase.initializeApp(firebaseConfig)
}