import { getProductById } from '@/utils/request';
import React from 'react';
import ShowProduct from '@/app/component/ShowProduct';
export default async function SingleProduct({params}) {
    const response=await getProductById(params.id);
    console.log(response);
  return (
    <div className="container mx-auto p-20">
        <ShowProduct  data={response} />
    </div>
  )
}
