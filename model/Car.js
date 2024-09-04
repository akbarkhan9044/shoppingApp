import {Schema,model, models} from "mongoose";


const carSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    launchIn:{
        type:Number,
        required:true
    },
    colors:[{
        type:String
    }],
    seats:{
        type:String
    },
    images:[{
        type:String
    }]
},{timestamps:true});


const  Car=models.Cars||model("Cars",carSchema);

export default Car;