import EditProductForm from '@/app/component/EditProductForm';
import { getProductById } from '@/utils/request'
import React from 'react'

export default async function EditPageById({params}) {
    const response=await getProductById(params.id);
    console.log(response);
  return (
    <section className='bg-blue-50'>
    <div className='container m-auto max-w-2xl py-24'>
      <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
      <EditProductForm data={response} />
      </div>
    </div>
  </section>
  )

}
