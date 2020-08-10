import { useEffect } from 'react'
import Router from 'next/router'

const Index = () => {
  // redirect
  useEffect(() => {
    Router.push('/home')
  }, [])
  return null
}

export default Index
