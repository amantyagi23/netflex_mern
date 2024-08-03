import { useForm } from "react-hook-form";
import { createUser } from "../modules/user/services/userServices";
import { toast } from "react-toastify";

const SignupPage = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const onSubmit = async (data) =>{
        try {
            const result = await createUser(data);
            if(result.status === 201){
                toast.success(result.data.message)
            }
            else{
                toast.error(result.data.message)
            } 
        } catch (error) {
            console.log(error)  
        }
    }

  return (
    <div className=" min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-grey-300 px-6 py-8 rounded shadow-md text-white w-full">
        <h1 className="font-bold text-center text-red-900 text-6xl mb-5">NETFLEX</h1>  
            <form onSubmit={handleSubmit(onSubmit)} >
            <input 
             {...register('username')}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Full Name" />

            <input 
            {...register('email')}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
            {...register('password')}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />
            <input 
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password" />

            <button
                type="submit"
                className="w-full text-center py-3 rounded bg-red-800 text-white hover:bg-green-dark focus:outline-none my-1"
            >Create Account</button>
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
            Already have an account? 
            <a className="no-underline border-b border-blue text-blue" href="/login">
                Log in
            </a>.
        </div>
    </div>
</div>
  )
}

export default SignupPage