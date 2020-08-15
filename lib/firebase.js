import admin from 'firebase-admin'
import serviceAccount from '../serviceAccountKey.json'


// const privateKey = process.env.PRIVATEKEY.replace(/\\n/g, '\n')

// const serviceAccount = {
//     "type": process.env.PRIVATEKEY,
//     "project_id": process.env.PROJECTID,
//     "private_key_id": process.env.PRIVATEKEYID,
//     "private_key": privateKey,
//     "client_email": process.env.CLIENTEMAIL,
//     "client_id": process.env.CLIENTID,
//     "auth_uri": process.env.AUTHURI,
//     "token_uri": process.env.TOKENURL,
//     "auth_provider_x509_cert_url": process.env.AUTHPROVIDERX509CERTURL,
//     "client_x509_cert_url": process.env.CLIENTX509CERTURL
// }

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