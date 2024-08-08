import React, { useEffect } from 'react'
import { removeToken } from '../modules/user/services/authServices'
import { useUser } from '../shared/providers/UserProvider'

const LogoutPage = () => {
    const {updateUser} = useUser();
  useEffect(() => {
    console.log("ello");
    localStorage.removeItem("role")
     removeToken()
     updateUser(null);
   }, [])
   
  return (
    <div>LogoutPage
        <a href='/' >Home</a>
    </div>
  )
}

export default LogoutPage