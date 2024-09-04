'use client';
import React from 'react'
import styles from '@/styles/Modify.module.css'
import Image from 'next/image';
import { deleteProductById } from '@/utils/request';
import { useRouter } from 'next/navigation';
export default function ModifyComponent({data}) {
    const router=useRouter();
    const handleDeleteProduct=async(id)=>{
        const response=await deleteProductById(id);
        router.push("/shop");
    }

    const handleEditProduct=async(id)=>{
        router.push(`/product/editproduct/${id}`)
    }



  return (
    <div className={`container mx-auto p-3`}>
     {
        data && data.map((item)=>(
            <div className={styles.contain}>
               <Image src={item.images[0]} alt="alt" width={200} height={200} />
               <h3>
                {item.title}
               </h3>
               <div className={styles.buttons}>
               <button onClick={()=>{handleEditProduct(item._id)}}>
                Edit
               </button>
               <button onClick={()=>{handleDeleteProduct(item._id)}}>Delete</button>
               </div>
            </div>
        ))
     }
    </div>
  )
}
