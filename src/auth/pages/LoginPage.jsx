import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext (AuthContext);

  const handledLogin = () =>{
    let lastPatch = localStorage.getItem('lastPatch') || '/';
    login('suceta', '12345');
    navigate(lastPatch, {
      replace : true
    });
  }
  return (
    <>
    <div className="container mg-3">
        <h2>Login Page</h2>
        <hr />

        <button className="btn btn-primary"
        onClick={ handledLogin }
        >
          Login
        </button>

    </div>

    </>
  )
}
