import connectDb from "@/config/database";
import Shop from "@/model/Shopping";





export const GET=async(request,{params})=>{
    try{
   const response=await Shop.findById(params.id);
   return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        return new Response("Error while fetching Data",{status:400});
    }
}


export const DELETE=async(request,{params})=>{
    try{
        const  deleteProduct=await Shop.findByIdAndDelete(params.id);
        if(deleteProduct){
        return new Response(JSON.stringify({message:"Product Deleted Successfully"}),{status:200});
        }else{
            throw new Error("Error while deleteing product");
        }
    }catch(error){
        return new Response("Error while deleteing Product",{status:400});
    }
}


export const PUT=async(request,{params})=>{
try{
await connectDb();
console.log(params);
const data=await request.json();
const response=await  Shop.findByIdAndUpdate(params.id,data);
const afterUpdate=await Shop.findById(params.id);

 return new Response(JSON.stringify(afterUpdate),{status:200});
}catch(error){
    return new Response("Error while fetching Data",{status:400});
}
}