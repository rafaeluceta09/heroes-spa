import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

/*
const initialState ={
    logged : false
}
*/
const init = () =>{

    let user = JSON.parse(localStorage.getItem('user'));
    return {
        logged : !!user,
        user
    }

}

export const AuthProvider = ({ children }) => {

    const [ authState , dispach ] = useReducer(AuthReducer , {}, init);


    const login = (user, pass) =>{
        
        let _user = {
            userName : 'stalin uceta c.',
            email :    'suceta@miapp.com',
            userLogin : user
        };
        
        const action ={
            type : types.login,
            payload : _user
        }; 
        
        localStorage.setItem('user', JSON.stringify(_user));
        
        dispach(action);

    }

    const logout = () =>{

        localStorage.removeItem('user');

        dispach({
            type : types.logout 
        });

    }

    return (
        <AuthContext.Provider value={{ ...authState , login, logout }} >
            { children }
        </AuthContext.Provider>
    )
}
