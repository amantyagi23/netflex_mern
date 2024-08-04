import React from 'react'
import { useForm } from 'react-hook-form'
import { changePassword } from '../services/userServices';
import { toast } from 'react-toastify';

const ProfilePage = () => {

    const {register,handleSubmit} = useForm();
    const onSubmit = async (data)=>{
        
        try {
            const result  = await changePassword(data);

            if(result.status === 200){
                toast.success(result.data.message)
   
            }
            else{
                toast.error(result.data.message)
            }
        } catch (error) {
            toast.error(error.message.toString())
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("oldPassword")} name='oldPassword' placeholder='old Password' />
            <input {...register("newPassword")} name='newPassword' placeholder='New Password'/>
            <button type='submit'>change</button>
        </form>
    </div>
  )
}

export default ProfilePage