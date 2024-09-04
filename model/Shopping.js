import mongoose,{Schema,model,models} from "mongoose";


const shopSchema=new Schema({
title:{
    type:String
},
price:{
    type:Number
},
images:[{
    type:String
}],
about:{
    type:String
},
colors:[
    {type:String}
],
category:{
    type:String
},
count:{
    type:Number
},
rating:{
    type:Number
},
peopleSay:[{type:String}],
discount:{
    type:Number
},
sizes:[
    {type:String}
]



},{timestamps:true});


const Shop=models.Shopping|| model("Shopping",shopSchema);

export default Shop;