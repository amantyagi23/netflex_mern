import {useForm} from 'react-hook-form'

const LoginPage = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

  return (
    <div className="min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="px-6 py-8 rounded shadow-md text-white w-full">
        <h1 className="font-bold text-center text-red-900 text-6xl mb-5">NETFLEX</h1>  
            
           <form >
           <input 
           {...register('email')}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
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