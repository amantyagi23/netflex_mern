
import axios from 'axios'
import { baseURL } from '../../../config'
import { getToken } from '../../user/services/authServices.js';


export const createMovie = async(data)=>{
    try {
        const response =  await axios.post(`${baseURL}/movies/create`,{...data},{headers:{Authorization:getToken()}})
        return response;
       } catch (error) {
          throw new Error(error.response.data.message.toString());
       }
}

