import React from 'react'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter()
  return (
    <div>
      <div>im about page</div>
      <button onClick={() => router.push('/home?counter=10')}>to homePage</button>
    </div>
  )
}

export default About
