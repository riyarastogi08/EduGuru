import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children  }) => {

    const [ currentUser,setCurrentUser ] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      );
    const [ currentAdmin,setCurrentAdmin ] = useState(
        JSON.parse(sessionStorage.getItem('admin'))
      );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/');
    }
    const adminlogout = () => {
        sessionStorage.removeItem('admin');
        setLoggedIn(false);
        navigate('/');
    }

    return (
        <AppContext.Provider value={{ loggedIn, setLoggedIn, logout,currentUser,currentAdmin,setCurrentAdmin,setCurrentUser }} >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;