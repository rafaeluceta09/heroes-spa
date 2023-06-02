import { heroes } from "../"


export const getHeroesByPublisher = ( publisher ) =>{

   
    //return heroes.filter( heroe => heroe.publisher === publisher );   
    // debugger;
    return heroes.filter(hero => hero.publisher === publisher);
   

}