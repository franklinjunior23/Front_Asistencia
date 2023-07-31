import { useLogin } from "../../../context/authContext";

function Navbar() {
  const {UsuarioLog} =useLogin()
  return (

    <div className="bg-slate-950/80 w-full">
      <nav className=" container max-w-[1250px]  px-3 py-3 md:py-4 flex justify-between m-auto">
        <div>
          <label htmlFor="menu-toggle" className="cursor-pointer &&md:hidden block px-3">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
        <div>
          <h1 className="text-center text-white py-2">Asistencia</h1>
        </div>
        <div>
          <span className="flex justify-center items-center gap-3 border py-1 px-3 rounded-lg cursor-pointer relative" onClick={()=>{console.log("abrir mod")}}>
            <span className="text-white">
              {UsuarioLog.nombre}
            </span>
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <circle fill="none" cx="12" cy="7" r="3" />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
