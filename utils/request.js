import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const APIDOMAIN=process.env.NEXT_PUBLIC_API_DOMAIN?process.env.NEXT_PUBLIC_API_DOMAIN:null;



async function getAllProduct(){
    try{
        const res=await fetch(`${APIDOMAIN}/shop`,{cache:"no-cache"});
        if(!res.ok){
            throw new Error("Error while fetching data.");
        }
        const response=await res.json();
        return response;
    }catch(error){
        console.log("Error while fetching data");
    }
}


async function getProductById(id){
    try{
        const res=await fetch(`${APIDOMAIN}/shop/${id}`,{cache:'no-cache'});
        if(!res.ok){
            throw new Error("Error while fetcing data");
        }
        const response=await res.json();
        return response;      
    }catch(error){
        console.log("Error while fetching Data");
    }
}

async function  deleteProductById(id) {
 try{
    const res=await fetch(`${APIDOMAIN}/shop/${id}`,{method:"DELETE"});
    const response=await res.json();
    return response;
 }catch(error){
    console.log("Error while deleting product");
 }
    
}

async function updateProductById(id,formData){
    try{
        
       const product={
        title:formData.get('title'),
        price:formData.get('price'),
        about:formData.get('about'),
        category:formData.get("category")
       }
       console.log(product);
        const response=await fetch(`${APIDOMAIN}/shop/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        })

        const res=await response.json();
    }catch(error){
        console.log("Error")
    }
    

    redirect(`/shop`) // Navigate to the new post page
}

export {getProductById,getAllProduct,deleteProductById,updateProductById};