import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Showproduct.module.css';
import Link from 'next/link';
export default function ShowProduct({data}) {
  return (
    <div className={styles.container}>
        <div>
    <Image src={data.images[0]} alt="alt" width={500} height={500} />
        </div>
        <div className={styles.showcontentWidth}>
            <h1 className="text-slate-600 text-5xl text-justify">{data.title}</h1>
            <p  className="text-stone-500 mt-5">{data.about}</p>
            <div className="mt-2 flex flex-row gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

              <h1>{data.price}</h1>
            </div>
        </div>
        <Link href="/shop" className={`mt-2 flex fle-row ${styles.buttons}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>
Go Back
        </Link>
    </div>
  )
}
