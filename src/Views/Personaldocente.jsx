import { useParams } from "react-router-dom";
import { getusuario } from "../api/Docente";
import { useState } from "react";


export default function Personalocente() {
  const {nombre} = useParams();
  const [nombreusuario, setnombreusuario] = useState('');

  async function saber (){
    const result = await getusuario(nombre);
    setnombreusuario(result[0].nombre);
  }
 saber()
 


  return (
    <main className="grid place-content-center w-screen min-h-screen">
      <h1 className="text-xl">Bienvenido {nombreusuario}</h1>

    </main>
  )
}




