
import { isAuthenticated } from '../../modules/user/services/authServices'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuth = isAuthenticated();
    const navigate = useNavigate();

    console.log("isAuth",isAuth);
    
    if(isAuth === true){
      return  <>{children}</>
    }else{
        navigate("/")
    }
  
}

export default ProtectedRoute