import { Route, Routes  } from "react-router-dom";
import { HeroRouters } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  return (
    <>
      <div className="container-fluid">
          <Routes>
              {/* ***** public routes ***** */}
              <Route path="login" element ={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>  
              } />

              {/* ***** private routes ***** */}
              <Route path="/*" element={
                <PrivateRoute>
                  <HeroRouters /> 
                </PrivateRoute>
              } />

          </Routes>
      </div>
    </>
  )
}
