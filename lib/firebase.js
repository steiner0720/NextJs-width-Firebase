import admin from 'firebase-admin'

const privateKey = process.env.PRIVATEKEY.replace(/\\n/g, '\n')
const serviceAccount = {
    "project_id": process.env.PROJECTID,
    "private_key": privateKey,
    "client_email": process.env.CLIENTEMAIL,
}

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
        console.error('Firebase admin initialization error', error.stack)
    }
}

export default admin.firestore()