'use client';
import React from 'react'
import {useState} from 'react';
import styles from '@/styles/Shopitem.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from 'postcss';
export default function ShopItem({data}) {

    const [product,setProduct]=useState(data);
    const [filter,setFilter]=useState("");
    const handleChange=(e)=>{
        let value=e.target.value;
        setFilter(e.target.value);
         if(value ==="All"){
            setProduct(data);
         }else if(value !=="All"){
            
            let filterData=data.filter((item)=>item.category=== value);
            setProduct(filterData);

         }
        

    }
  return (
    <>  
    <div className={styles.filter}>
        <div className="mb-4">
      <label
        htmlFor="category"
        class="block text-gray-700 font-bold mb-2"
        >Filter Product</label
      >
      <select
        id="category"
        name="category"
        class="border rounded w-full py-2 px-3"
        value={filter}
        onChange={handleChange}
        required
      >
          <option value="All">All Product</option>
          <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Books">Books</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>
      </select>
    </div>
    </div>
      <div className={styles.containers}>
        {product.length===0 &&(
            <div>
                <h1>No  Product Data</h1>
            </div>
        )}
        {product && product.map((item)=>(
            <div key={item._id} className={styles.card}>
                <Image src={item.images[0]} alt="alt" width={150} height={150} />
                <h5 className="text-slate-500 font-semibold">{item.title}</h5>
                <div className={styles.price}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

<p
 className="text-slate-500 font-semibold"
>{item.price}</p>
                </div>
                <Link href={`/product/${item._id}`} className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

                </Link>
            
            </div>
        ))}

    </div>
    </>

  )
}
