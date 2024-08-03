import axios from 'axios'
import { baseURL } from '../../../config'

export const createUser = async (data)=>{
   try {
    const response =  await axios.post(`${baseURL}/user/create`,{...data})
    return response;
   } catch (error) {
    throw new Error(error.message.toString());
   }

}