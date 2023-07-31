/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogeadoDate = createContext();
export const useLogin = () => {
  const dat = useContext(LogeadoDate);
  return dat;
};

export const DateLoginProvider = ({ children }) => {
  const UserLocalstore = JSON.parse(localStorage.getItem("User")) || [];
  const [UsuarioLog, setUsuarioLog] = useState(UserLocalstore);

  const [ExistLoget, setExistLoget] = useState(false);

  const AddUser = (datos) => {
    setUsuarioLog(datos);
    localStorage.setItem("User", JSON.stringify(datos));
  };
  const CerrarSeccion = () => {
    setUsuarioLog([]);
    localStorage.removeItem("User");
    localStorage.removeItem("token_docent");
  };
  const Verifi = () => {
    const token = localStorage.getItem("token_docent");
    const User = localStorage.getItem("User");
    if ((token, User !== 0)) {
      setExistLoget(!!token);
    }
  };
  const handleStorageChange = (e) => {
    if (e.key === "User") {
      // Actualizar el estado userData cuando cambie el valor en el localStorage
      setUsuarioLog(JSON.parse(e.User));
    }
  };
  useEffect(() => {
    Verifi();
  }, []);

  useEffect(() => {
    // Agregar el listener para el evento storage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Remover el listener cuando el componente se desmonte
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [UsuarioLog,ExistLoget]);

  return (
    <LogeadoDate.Provider
      value={{ UsuarioLog, ExistLoget, AddUser, CerrarSeccion }}
    >
      {children}
    </LogeadoDate.Provider>
  );
};

DateLoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
