import HomePage from './pages/HomePage'
import {Route, BrowserRouter ,Routes, useRouteError} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './shared/routes/ProtectedRoute';
import ProfilePage from './modules/user/components/ProfilePage';
import { useEffect } from 'react';
import { useUser } from './shared/providers/UserProvider';
import { getMe } from './modules/user/services/userServices';
import { getToken, isAuthenticated } from './modules/user/services/authServices';
import AdminRoute from './shared/routes/AdminRoute';
import DashboardPage from './pages/DashboardPage';


function App() {

  const {updateUser} = useUser()
  const getUser = async ()=>{
    const result = await getMe();
    updateUser(result.data.userDTO)
  }
 
  useEffect(() => {
   if(isAuthenticated()){
    getUser()
   }
  }, [getToken()])
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/profile' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} errorElement={<ErrorBoundary/>} />

      <Route path='/dashboard' element={<ProtectedRoute><AdminRoute><DashboardPage/></AdminRoute></ProtectedRoute> }/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}


function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

export default App
