
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext);//context read
    console.log("check ", auth);
    return auth;
}

export default useAuth;