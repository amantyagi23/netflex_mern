
import { useNavigate } from 'react-router-dom';


const AdminRoute = ({children}) => {

    const role = localStorage.getItem("role")
   console.log(role);
   
    const navigate = useNavigate();

    
    if( role === 'Admin'){
      return  <>{children}</>
    }else{
        navigate("/")
    }
}

export default AdminRoute



// jwt - frontend ->  verfy 
// create backend 


// aws ->  open -> backend permission -> action 