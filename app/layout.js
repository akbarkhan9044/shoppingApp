import React from 'react'
import styles from '@/styles/Home.module.css';
import './global.css';
import NavbarApplication from './component/Navar';
import Footer from './component/Footer';
export const metadata={
title:"Shopping App",
keywords:"Shopping Cloths & Jwellary",
decription:"Shopping App"
}
export default function RootLayout({children}) {
  return (
    <html>
        <body className={styles.body}>
          <NavbarApplication/>
            <main>{children}</main>
            <Footer/>
        </body>
    </html>
  )
}
