import axios from 'axios'
import { baseURL } from '../../../config'
import { getToken, setToken } from './authServices';

export const createUser = async (data)=>{
   try {
    const response =  await axios.post(`${baseURL}/user/create`,{...data})
    return response;
   } catch (error) {
      throw new Error(error.response.data.message.toString());
   }

}

export const login = async (data)=>{
   try {
      const response =  await axios.post(`${baseURL}/user/login`,{...data})

      setToken(response.data.accessToken)
      
      return response;
   } catch (error) {
      console.log(error);
      
      throw new Error(error.response.data.message.toString());
   }
}


export const changePassword = async (data)=>{
   try {
      const response =  await axios.post(`${baseURL}/user/changepassword`,{...data},{headers:{Authorization:getToken()}})
      return response;
   } catch (error) {
      console.log(error);
      
      throw new Error(error.response.data.message.toString());
   }
}



