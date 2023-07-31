import { useState } from "react";

function ItemFecha({ fecha }) {
  const [ActiveAbrir, setActiveAbrir] = useState(false);
  return (
    <>
      <button
        onClick={() => setActiveAbrir(!ActiveAbrir)}
        className="border relative border-black/30 rounded-xl  px-6 py-5"
      >
        <div>
          <h3 className="text-left">
            Fecha : <span>{fecha?.dia}</span>
          </h3>
        </div>
        <div className="absolute top-3 right-6 text-4xl">
          <i className="fi fi-rr-angle-small-down text-black font-semibold"></i>
        </div>
        {ActiveAbrir && (
          <div className="py-2 ">
            <h4 className="bg-[#FFE5B4] px-2 font-normal rounded-lg my-1">
              Hora de Entrada : <span>{ fecha.h_entr=="" || fecha.h_entr==null?"No se Marco" :fecha.h_entr} </span>
            </h4>
            <h4 className="bg-[#FFE5B4] px-2 font-normal rounded-lg my-1">
                Hora de Salida : <span>{fecha.h_sali=="" || fecha.h_sali==null?'No se Marco': fecha.h_sali} </span>
            </h4>
          </div>
        )}
      </button>
    </>
  );
}

export default ItemFecha;
