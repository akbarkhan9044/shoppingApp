"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function LoginLayout({children}) {
    const pathName=usePathname();
  return (
    <div>
        {pathName!=="/login/loginteacher"?(
                 <ul>
                 <li>
                     <Link href="/login">Main Login</Link>
                 </li>
         
                 <li>
                     <Link href="/login/loginstudent">Login Student</Link>
                 </li>
         
                 <li>
                     <Link href="/login/loginteacher">Login Teacher</Link>
                 </li>
              </ul>
        ):(
            <Link href="/login">Go Back</Link>
        )}

      {children}
    </div>
  )
}
