import { model, Schema } from "mongoose";



const userSchema = new Schema({
  userId:{type:String,required:true,unique:true},  
  userName:{type:String,required:true},  
  email:{type:String,required:true,unique:true},  
  password:{type:String,required:true}, 
  role:{ type:String,default:"user" ,enum:['user','admin','manager']}, 
  status:{type:String,default:'inActive',enum:['active','inActive']},  
  isDeleted:{type:Boolean,default:false},  
})

export const userModel = model("users",userSchema);