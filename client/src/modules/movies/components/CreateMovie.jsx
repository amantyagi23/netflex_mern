import React from 'react'
import { useForm } from 'react-hook-form'
import { createMovie } from '../services/movieService';
import { toast } from 'react-toastify';

const CreateMovie = () => {

    const {register,handleSubmit,reset} = useForm();

    const onSubmit = async(data)=>{
        try {
            const result = await createMovie(data);
            if(result.status == 201){
                toast.success("Movie Created")
                reset();
            }
        } catch (error) {
            toast.error(error.message.toString())
        }
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Move Title' {...register("title")}/>
        <input placeholder='desc' {...register("content")}/>
      <button>Submit</button>
        </form>
    </div>
    </>
  )
}

export default CreateMovie