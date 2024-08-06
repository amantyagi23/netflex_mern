import { useState } from "react";
import { useUser } from "../providers/UserProvider";


const Navbar = () => {
  const { user } = useUser();
const [showMenu, setShowMenu] = useState(false);

const openMenu = () => {
  setShowMenu(!showMenu)
}
  return ( 
    <> 
      <header className="bg-black">
        <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl w-40">
              <a href="#"
                ><img
                  className="w-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  alt=""
              /></a>
            </div>
            <div className="hidden md:block ml-5">
              <ul className="flex items-center space-x-8">
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="outline-none mobile-menu-button">
                Menu
              </button>
            </div>
          </div>
         <div>
           {user !== null? <div>
            <div className="relative ml-4 flex-shrink-0">
            <div>
              <button onClick={openMenu} type="button" className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                Welcome {user.userName}
                
              </button>
            </div>

          
            {
              showMenu && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" >
             
              <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" >Your Profile</a>
              {user.role === 'admin' &&  <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700" >Dashboard</a>}
              <a href="/settings" className="block px-4 py-2 text-sm text-gray-700" >Settings</a>
              <a href="/logout" className="block px-4 py-2 text-sm text-gray-700" >Sign out</a>
            </div>
            }
          </div>
           </div> : <div className="text-white">
            <a href="/login" className="">Login</a>
            <a href="/signup">Sign Up</a>
          </div> }
         </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded"
                >Home</a
              >
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded"
                >About</a
              >
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded"
                >Services</a
              >
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar