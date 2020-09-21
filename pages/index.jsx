import { Router } from '../i18n'

const redirect = async () => Router.push('/home')

// Index page redirect to home
const Index = () => redirect()

export default Index
