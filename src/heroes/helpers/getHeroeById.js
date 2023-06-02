import { heroes } from "../data";

export const getHeroeById = (id) => {

    return heroes.find(c => c.id === id);
    

}