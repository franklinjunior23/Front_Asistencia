import { useEffect, useState } from "react";
import Hora from "../../components/Dashboard/components/Hora";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/ConfigApi";
import moment from 'moment-timezone';
import { toast } from "react-toastify";

function Marcar() {
    const getLimaTime = () => {
        const limaTime = moment().tz('America/Lima');
        return limaTime.format('hh:mm A');
      };
  const { UsuarioLog } = useAuth();


  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${day}/${month}`;
  const [DataInicio, setDataInicio] = useState([]);
  const currentTimeInLima = getLimaTime();
     // Salida: "11:58 PM" (hora actual en Lima)
  const VerificarEstado = async () => {
    const data = await axiosInstance.post("api/docente", {
      fecha: formattedDate,
    });
    if (data.data?.encontro == true) {
      return setDataInicio(data.data.horario[0]);
    }
    return console.log("Nose encontro nada");
  };
  const MarcarAsistencia =async()=>{
    const Valid = await axiosInstance.post('api/marcacion',{fecha:formattedDate,hora:currentTimeInLima})
    toast.success(Valid.data.msg)
    VerificarEstado()
  }
  useEffect(() => {
   
    VerificarEstado()
  }, []);
  return (
    <main>
      <section>
        <article className="bg-white/30 px-4 py-2 rounded-xl">
          <h3 className="text-center">Bienvenido {UsuarioLog?.nombre}</h3>
          <h3 className="text-center text-2xl" >{formattedDate}</h3>
          <div>
            <Hora />
          </div>
        </article>
        <article className="bg-white/30 mt-4 px-4 py-5 rounded-xl">
          <div className="">
            <button
              type="button"
              onClick={MarcarAsistencia}
              className={` w-full py-3 bg-[#FFE5B4]  rounded-xl  text-black font-medium ${ DataInicio.length!==0 ?   DataInicio.h_entr!==null && DataInicio.h_sali!==null?"bg-[#FFE5B4]/60":"bg-[#FFE5B4]":"aa"}`}
              disabled={DataInicio.length!==0?  DataInicio.h_entr!==null && DataInicio.h_sali!==null?true:false :false}
            >
              Marcar Asistencia
            </button>
           
          </div>
          <div className="grid grid-cols-2 text-center mt-16 bg-zinc-400 rounded-xl">
            <div className="py-2">
                <h3 className="text-lg py-2">Hora de entrada</h3>
                <hr className="border-black"/>
                <p className="py-3  font-semibold text-xl">{DataInicio.h_entr==null||"" ?'No Existe ninguna Marcacion':DataInicio.h_entr}</p>
               
            </div>
            
            <div className="py-2">
                <h3 className="text-lg py-2">Hora de Salida</h3>
                <hr className="border-black"/>
                <p className="py-3 font-semibold text-xl ">{DataInicio.h_sali ==null ?'No se Marco':DataInicio.h_sali}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Marcar;
