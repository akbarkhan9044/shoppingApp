"use client";
import React, { useState } from 'react';

export default function AddProductForm() {
    // Corrected state management function name
    const [fields, setFields] = useState({
        title: 'Jon',
        price: 0,
        about:"",
        category:"",
        images:[]
      
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Check if name contains dot notation for nested state
        if (name.includes('.')) {
            const [outerKey, innerKey] = name.split('.');
            console.log(outerKey);
            console.log(innerKey);

            setFields((previousFields) => ({
                ...previousFields,
                [outerKey]: {
                    ...previousFields[outerKey],
                    [innerKey]: value
                }
            }));
        } else {
            // Direct state update for simple fields
            setFields((previousFields) => ({
                ...previousFields,
                [name]: value
            }));
        }
    };

    const handleImageChange=(e)=>{
        const {files}=e.target;
       const updatedImages=[...fields.images];
       for(const file of files){
        updatedImages.push(file);
       }
       setFields((prev)=>({
        ...prev,
        images:updatedImages
       }));
      
      };

    const handleAmenitiesChange=(e)=>{
        const {value}=e.target;
         const index=fields.sizes.indexOf(value);
         console.log("Index",index);
         const updatedAmenties=[...fields.sizes];
         if(index === -1){
           updatedAmenties.push(value);
         }else{
           updatedAmenties.splice(index,1);
         }
         setFields((prev)=>({
           ...prev,
           sizes:updatedAmenties
         }))
       console.log(fields.sizes);
       };

    return (
        <div>
            <form action='/api/shop' 
    method='POST'
     encType='multipart/form-data'>
                <div>
                    <label
                      className='block text-gray-700 font-bold mb-2'
                    >
                        Product Name
                    </label>
                    <input
                        type="text"
                        className='border rounded w-full py-2 px-3 mb-2'
                        name="title" // Added name attribute
                        placeholder="Product Name"
                        value={fields.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label
                      className='block text-gray-700 font-bold mb-2'
                    >
                        Product Price
                    </label>
                    <input
                        type="text"
                        className='border rounded w-full py-2 px-3 mb-2'
        
                        name="price" // Added name attribute
                        placeholder="Product Price"
                        value={fields.price}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label
                      className='block text-gray-700 font-bold mb-2'
                    >
                       About Product 
                    </label>
                    <input
                        type="text"
                        class="border rounded w-full py-2 px-3"
                        name="about" // Added name attribute
                        placeholder="About Product"
                        value={fields.about}
                        onChange={handleChange}
                    />
                </div>

    <div className="mb-4">
      <label
        htmlFor="category"
        class="block text-gray-700 font-bold mb-2"
        >Property Type</label
      >
      <select
        id="category"
        name="category"
        class="border rounded w-full py-2 px-3"
        value={fields.type}
        onChange={handleChange}
        required
      >
          <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Books">Books</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>
      </select>
    </div>

                <div>
                    <label
                       className='block text-gray-700 font-bold mb-2'
                    >
                       Number of item sell till Now
                    </label>
                    <input
                        type="text"
                        className='border rounded w-full py-2 px-3 mb-2'
                        name="count" // Added name attribute
                        placeholder="Product Sell"
                        value={fields.count}
                        onChange={handleChange}
                    />
                </div>


                <div class="mb-4">
      <label for="images" class="block text-gray-700 font-bold mb-2"
        >Images (Select up to 4 images)</label
      >
      <input
        type="file"
        id="images"
        name="images"
        onChange={handleImageChange}
        class="border rounded w-full py-2 px-3"
        accept="image/*"
        multiple
        required
      />
    </div>

                <div>
        <button
          className='
          
          bg-slate-900
          text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Add Property
        </button>
      </div>

            </form>
        </div>
    );
}
