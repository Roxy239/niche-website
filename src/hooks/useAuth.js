
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext);//context read
    return auth;
}

export default useAuth;