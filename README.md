This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
Project include:  
- i18n: i18next  
- Database: firebase  
- Firebase Login: firebase-admin  
- Global state: swr  
- Vercel deploy  

## DEMO  
  
[Demo Page](https://nextjswithfirebase.vercel.app)  
  
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

## Set .env for firebase serviceAccount

- Create [Firebase](https://firebase.google.com/) Project

- Create .env.local file  
PROJECTID=your-id  
PRIVATEKEY=your-key  
CLIENTEMAIL=your-email  
  
- Set serviceAccount:  
const serviceAccount = {  
    "project_id": process.env.PROJECTID,  
    "private_key": process.env.PRIVATEKEY.replace(/\\n/g, '\n'),  
    "client_email": process.env.CLIENTEMAIL,  
}  
  
- Set environment variables on Vercel project setting.  
  
## i18n/Router
  
- Open i18n.js file to set language support:  
module.exports = new NextI18Next({  
	defaultLanguage: 'en-US',  
	otherLanguages: ['en-US', 'zh-TW'],  
	localeSubpaths,  
	localePath: path.resolve('./public/static/locales'),  
})  
  
- use Router import from i18n.js:  
import { Router } from '../i18n'  
Router.push('/home')  
  
## SWR  
  
 - [useSwr](https://github.com/vercel/swr) for global state  
   
 - Create a app.js file for initial state  
   
 - Fetch initial state:  
 import initialData from '../store/app'  
 const state = useSwr('store', false, { initialData })  
  
 - Update state:  
 mutate('store', { ...state.data, count: counted }, false)  