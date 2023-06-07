import {heroes} from '../data/heroes';

export const getHeroeByName = (hero) =>{

    let herofilter = hero.toLocaleLowerCase().trim();
    
    if(herofilter.length < 1) return [] ;

    return heroes.filter(
            c => c.superhero.toLocaleLowerCase().includes(herofilter)
        );

}