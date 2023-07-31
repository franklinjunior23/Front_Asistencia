import Hora from "../../components/Dashboard/components/Hora"
import { useLogin } from "../../context/authContext"

function Marcar() {
    const {UsuarioLog}=useLogin()
  return (
    <main>
        <section>
            <article className="bg-white/30 px-4 py-2 rounded-xl">
                <h3 className="text-center">Bienvenido {UsuarioLog.nombre}</h3>
                <p>Hora Actual</p>
                <div>
                   <Hora/>
                </div>
            </article>
        </section>
    </main>
  )
}

export default Marcar