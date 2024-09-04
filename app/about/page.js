import React from 'react'
import Link from 'next/link'
export default function About() {
  return (
    <div>
 <h1>About Page</h1>
 <br/>

      <Link href="/about/aboutcollege">Go to About college page.</Link>
      <br/>
      <br/>
      <Link href="/about/aboutstudent">Go to About Student Page.</Link>
    </div>
  )
}
