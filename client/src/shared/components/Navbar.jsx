

const Navbar = () => {
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
          <div className="text-white">
            <a href="/login" className="">Login</a>
            <a href="/signup">Sign Up</a>
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