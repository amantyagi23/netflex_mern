
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../modules/user/services/authServices';
import { useUser } from '../providers/UserProvider';

const AdminRoute = ({children}) => {

    const {user} = useUser();
    console.log(user);
    
    const navigate = useNavigate();

    
    if( user.role === 'user'){
      return  <>{children}</>
    }else{
        navigate("/")
    }
}

export default AdminRoute