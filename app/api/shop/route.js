import cloudinary from "@/config/cloudinary";
import connectDb from "@/config/database";
import Shop from "@/model/Shopping";


export const GET=async()=>{
    try{
        const response=await Shop.find();
      return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        return new Response("Error",{status:400});
    }
}


export const POST=async(request)=>{
    try{
        await connectDb();
        const data=await request.formData();
        let  images=data.getAll('images').filter((image)=>image.name !=='');
    
        let product={
            title:data.get('title'),
            price:data.get('price'),
            about:data.get('about'),
            category:data.get('category'),
            count:data.get('count')
        }


                //Upload image
                const uploadImageValue=[];
                console.log("iMAGE upLOAD")
                for(const image of images){
                    const imageBuffer=await image.arrayBuffer();
                    const imageArray=Array.from(new Uint8Array(imageBuffer));
                    const imageData=Buffer.from(imageArray);
        
                    //Convert the image
                    const imageBase64=imageData.toString('base64');
                    console.log(imageBase64);
                    //Make request to Upload the image
                    const result=await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`);
                    console.log("aFTER UPLOAD",result);
        
                    uploadImageValue.push(result.secure_url);
        
                    console.log("Result",result);
        
                    //wait for all images to upload
                    const uploadedImages=await Promise.all(uploadImageValue);
        
                    //add to property data
                    product.images=uploadImageValue;
                
                }

                const response=await Shop.create(product);
                console.log("Response mongodb",response);
                return Response.redirect(`${process.env.NEXTAUTH_URL}/product/${response._id}`);

        //return new Response(JSON.stringify({message:"Tester"}),{status:200})    
    }catch(error){
        console.log(error);
        return new Response("Error while Posting data",{status:400})
    }
}