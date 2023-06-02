import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helpers';


export const HeroesPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const heroe = useMemo( ()=> getHeroeById(id) ,[id]); //el id en corchetes significa que solo se volvera a llamar cuando el id cambie
  
  




  const onNavigateBack = () =>{
    navigate(-1);
  }

  if(!heroe){
    //return (<Link to='/marvel' > </Link>);
    return <Navigate to='/marvel' />
  }


  return (
    <>
      <div className="row mt-2">
        <div className='col-4 animate__slideInDown'>
          <img src={`/assets/heroes/${id}.jpg`}
            className="img-thumbnail" 
            alt={ heroe.superhero } 
            />
          <div className="card-body">
            <p className="card-text">
              
            </p>
          </div>
        </div>{ /*  col-4 */ }
        <div className='col-8'>
          <h3> { heroe.superhero } </h3>
          <hr />
          <ul className='list-group list-group-flush'>           

            <li className='list-group-item'><b> Alter Ego : </b> { heroe.alter_ego } </li>
            <li className='list-group-item'><b>Characters : </b> { heroe.characters }</li>
            <li className='list-group-item'><b> First Aparition : </b> { heroe.first_appearance } </li>
          </ul>
          <button 
            className='btn btn-outline-dark'
            onClick={ onNavigateBack }>
            Returns ..
          </button>
          
        </div> { /*  col-8 */ }
      </div>
    </>
  )
}
