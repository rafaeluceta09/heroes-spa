import { Route, Routes  } from "react-router-dom";
import { HeroRouters } from "../heroes";
import { LoginPage } from "../auth";


export const AppRouter = () => {

  return (
    <>
      <div className="container-fluid">
          <Routes>
              <Route path="login" element = {<LoginPage />} /> 
              <Route path="/*" element=  { <HeroRouters /> } />
          </Routes>
      </div>
    </>
  )
}
