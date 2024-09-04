import { getAllProduct } from '@/utils/request'
import React from 'react'
import ShopItem from '../component/ShopItem';

export default async function ShopPage() {
  const response=await getAllProduct();
  return (
    <div>
   {response && <ShopItem data={response} />}
    </div>
  )
}
