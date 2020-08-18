const firebase = require('firebase/app')

// Config file
const firebaseConfig = {
    apiKey: "AIzaSyCG_SR9SVD3x0NnOi-jzZRLPySGFiEymog",
    authDomain: "nextjs-e33e1.firebaseapp.com",
    databaseURL: "https://nextjs-e33e1.firebaseio.com",
    projectId: "nextjs-e33e1",
    storageBucket: "nextjs-e33e1.appspot.com",
    messagingSenderId: "342786163618",
    appId: "1:342786163618:web:4adb2e729b1f3c8775a8fb",
    measurementId: "G-76W9NNHSXL"
}

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()