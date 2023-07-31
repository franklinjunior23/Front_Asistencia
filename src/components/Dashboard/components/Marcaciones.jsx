import { useEffect } from "react";
import ItemFecha from "./ItemFecha";
import axiosInstance from "../../../api/ConfigApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Marcaciones() {
  const [DataMaraciones, setDataMaraciones] = useState([]);
  const Mostrar = async () => {
    const datos = await axiosInstance.get("api/asistencias");
    return setDataMaraciones(datos.data);
  };
  const navi = useNavigate();
  useEffect(() => {
    Mostrar();
  }, []);
  return (
    <>
      <button
        className="border px-5 py-2 rounded-lg text-white "
        onClick={() => navi(-1)}
      >
        <h3 className="flex items-center justify-center text-center gap-3">
          <i className="fi fi-rr-angle-left"></i>Regresar
        </h3>
      </button>
      {DataMaraciones.length === 0 ? (
        <div className="h-[300px] grid place-content-center mt-6">
         
          <img src="/images/undraw_content_team_re_6rlg.svg" className="block m-auto" width={300} alt="" />
          <h3 className="text-white text-center py-3" >No Existe Nada ......</h3>
        </div>
      ) : (
        <>
          <section>
          </section>
          <article className="bg-white/60 mt-5 px-5 py-4 rounded-lg flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DataMaraciones.map((dat) => (
              <ItemFecha key={dat.id} fecha={dat} />
            ))}
          </article>
        </>
      )}
    </>
  );
}

export default Marcaciones;
