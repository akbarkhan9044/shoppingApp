import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/image/logo.png'
export default function Footer() {
    const currentYear=new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 mt-13">
    <div
      className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
    >
      <div className="mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

      </div>

      <div>
        <p className="text-sm text-gray-500 mt-2 md:mt-0">
          &copy; {currentYear} PropertyPulse. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}
