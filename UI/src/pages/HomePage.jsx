import { Navigate } from "react-router-dom";
import { useAuth } from 'hooks/use-auth';
import {useDispatch} from 'react-redux';
import {removeUser} from 'store/slices/userSlice';
import { Link } from "react-router-dom";
import ApplicForm from "./ApplicForm";
import { Container } from "@mui/system";


const HomePage = () => {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();

    return isAuth ? ( 
        <div>
            <h1>Welcome</h1>

            <button
                  onClick={()=> dispatch(removeUser())}>
               Log out from {email}
            </button>

            <Link to="/application">app</Link>
        </div> 
    ) : (
        
        <Navigate to="/login" />

        
        
        );



    }

    
export default HomePage;


  






