import admin from 'firebase-admin'

const serviceAccount = require("../serviceAccountKey.json")

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://nextjs-e33e1.firebaseio.com"
    })
} catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase admin initialization error', error.stack)
    }
}

export default admin.firestore()