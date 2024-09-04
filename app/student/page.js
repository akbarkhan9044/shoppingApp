import React from 'react'
import Link from 'next/link'
export default function Student() {
  return (
    <div>
      <Link href="/student/1">Student 1</Link>
      <Link href="/student/2">Student 2</Link>
      <Link href="/student/3">Student 3</Link>
    </div>
  )
}
