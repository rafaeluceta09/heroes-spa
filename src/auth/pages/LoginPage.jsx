import { useNavigate } from "react-router-dom"


export const LoginPage = () => {
  const navigate = useNavigate();

  const handledLogin = () =>{
    navigate('/marver', {
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
