import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
function RequireAuth({ children }) {
    const Navigate = useNavigate();
    const {isAuth} = useSelector(state => state.user);
    const authed  = isAuth;
  
    return authed === true ? children : <Navigate to="/login" replace />;
  }
  export default RequireAuth;