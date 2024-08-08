import {useForm} from 'react-hook-form'
import { getMe, login } from '../modules/user/services/userServices';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../shared/providers/UserProvider';

const LoginPage = () => {
    const {updateUser} = useUser()

    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async(data) =>{
      

        try {
            const result  = await login(data);

            if(result.status === 200){
              const result2 =  await getMe();
              if(result2.data.userDTO.role === 'admin'){
                localStorage.setItem("role","Admin")
              }
              updateUser(result2.data.userDTO);
                toast.success(result.data.message)
                navigate('/')
            }
            else{
                toast.error(result.data.message)
            }
        } catch (error) {
            toast.error(error.message.toString())
        }
    }
  return (
    <div className="min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="px-6 py-8 rounded shadow-md text-white w-full">
        <h1 className="font-bold text-center text-red-900 text-6xl mb-5">NETFLEX</h1>  
            
           <form onSubmit={handleSubmit(onSubmit)} >
           <input 
           {...register('email')}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
            {...register("password")}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />
           

            <button
                type="submit"
                className="w-full text-center py-3 rounded bg-red-800 text-white hover:bg-green-dark focus:outline-none my-1"
            >Login</button>
           </form>

            <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and 
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
            </div>
        </div>

        <div className="text-white mt-6">
            Create an account ?  
            <a className="no-underline border-b border-blue text-blue" href="/signup">
                 Sign Up
            </a>.
        </div>
    </div>
</div>
  )
}

export default LoginPage