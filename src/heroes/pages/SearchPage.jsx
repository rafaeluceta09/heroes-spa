import { useLocation, useNavigate } from "react-router-dom";
import  queryString  from "query-string";
import { useForm } from "../../hooks/useForm";
import { Cards } from "../components";
import { getHeroeByName } from "../helpers/getHeroeByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = 'a' } = queryString.parse(location.search);

  const { heroeToFind, onInputChange, onResetForm } = useForm({ 
      heroeToFind : q
    });

  const heroes = getHeroeByName(q);
  
  const onHandledSubmit = (e) =>{
    e.preventDefault();
    navigate(`?q=${ heroeToFind }`);                                                    
    
    //setHeroes( heroesx );
  }

  return (
    <>        
        <div className="row">
          
            <div className="col-4">
              <h3>Seraching </h3>
              <hr />
              <form onSubmit={onHandledSubmit}>
                <input  type="text" 
                        name="heroeToFind" 
                        id="heroeToFind" 
                        className=" form-control" 
                        value={ heroeToFind }
                        onChange={ onInputChange }/>

                <button className="btn btn-primary mt-1 "  >
                  Searchin heroe
                </button>
                
              </form>
            </div>
            <div className="col-8">
              <h3>Result   </h3>
              <hr />
              <div className="alert alert-success">asdf</div>
              <div className="row row-cols-1 row-cols-lg-3 g-3 ">
                {
                  heroes.map( hero => 
                    <Cards {...hero }  key={ hero.id }/>
                  )
                }
              </div>
              

              <div className="alert alert-danger">asdf</div>
              <hr/>
            </div>
        </div>
    </>
  )
}
