import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroesPage, MarvelPage, SearchPage } from "../../heroes";
import { NavBar } from "../../ui";



export const HeroRouters = () => {
  return (
    <>
        <NavBar />
        <div className="container-fluid">
            <Routes>
                <Route path="marvel" element={ <MarvelPage/> } />
                <Route path="dc" element={<DcPage />} />
                <Route path="search" element={ <SearchPage />} />
                <Route path="heroe/:id" element={ <HeroesPage />} />

                <Route path="/" element=  { <Navigate to ='/marvel' /> } />
            </Routes>
        </div>
    </>
  )
}
