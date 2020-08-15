This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Set .env

1.create .env file like this:

PROJECTID=my-id

PRIVATEKEY=my-key

CLIENTEMAIL=my-email


2.set you firebase.js file like this:

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

3.Go to vercel set environment variables.

4.npm i -g vercel and run vercel.

5.Complete!