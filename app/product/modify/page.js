import ModifyComponent from '@/app/component/Modify';
import { getAllProduct } from '@/utils/request'
import React from 'react'
import styles from '@/styles/Modify.module.css'
export default async function Modify() {
    const allProduct=await getAllProduct();
  return (
    <div  className={styles.containerHeight}>
      <ModifyComponent data={allProduct} />
    </div>
  )
}
