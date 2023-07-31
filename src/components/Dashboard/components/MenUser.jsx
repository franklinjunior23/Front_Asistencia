import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

function MenUser() {
  const { CerrarSesion } = useAuth();
  const navi = useNavigate();

  const Cerrar = () => {
    CerrarSesion();
    
  };


  return (
    <>
      <div className="absolute w-44 rounded-xl -bottom-24 right-3 bg-white text-center">
        <ul>
          <li className="py-2">
            <Link to="Marcaciones">Ver Marcaciones</Link>
          </li>
          <li className="py-2">
            <h1 onClick={()=>{Cerrar(), navi('/')}}>Cerrar Sesión</h1>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenUser;