
import { useMemo } from "react";
import {  Cards, getHeroesByPublisher } from "../index";

export const HeroList = ({ publisher }) => {

    //publisher es la dependencia, cuando cambie llama la funcion
    const heroes =useMemo(
                    () => getHeroesByPublisher( publisher ),[publisher]
                );
                
                
  return (
    <>


        <div className="row row-cols-1 row-cols-lg-3 g-3 ">
            {   
                heroes.map(heroe =>(
                    <Cards {...heroe }  key={ heroe.id }/>
                ))
            }
        </div>    

            

    </>
  )
}
