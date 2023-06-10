import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {

    const navigate  = useNavigate();
    const { pathname, search} = useLocation();
    const { user, logged , logout } = useContext(AuthContext);
    
    const handleLogout = () =>{
        
        const lastPatch  = pathname + search;
        console.log(lastPatch); 
        logout();
        navigate('/login',
                    { replace : true }
                );
       
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `'nav-item nav-link ' ${ isActive ? 'active' : ' '} ` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `'nav-item nav-link ' ${ isActive ? 'active' : ' '} ` } 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> { user?.userName }</span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout 
                    </button>
                </ul>
            </div>
        </nav>
  )
}
