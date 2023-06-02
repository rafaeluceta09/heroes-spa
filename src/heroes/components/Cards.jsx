import { Link } from "react-router-dom";


export const Cards = ({ superhero,id, }) => {
    const ruta  = '/assets/heroes/';
  return (
    <>
      <div className="card csu-w18-rem col m-1" >
          <img src={`${ruta+id}.jpg`} className="card-img-top"
          alt={ superhero } />   
          <div className="card-body">
              <h5 className="card-title">
                { superhero }
              </h5>
              <p className="card-text">
                  {}
              </p>
              <Link to={`/heroe/${id}`}  > Details... </Link>
          </div>
      </div> 
    </>
  )
}
