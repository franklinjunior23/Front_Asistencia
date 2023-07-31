import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [UsuarioLog, setUsuarioLog] = useState({});
  const [ExistLoget, setExistLoget] = useState(false);

  const Verifi = () => {
    const token = localStorage.getItem("token_docent");
    const user = JSON.parse(localStorage.getItem("User_docente"));

    if (token && user) {
      setUsuarioLog(user);
      setExistLoget(true);
    } else {
      setUsuarioLog(null);
      setExistLoget(false);
    }
  };

  useEffect(() => {
    Verifi();
  }, []);

  useEffect(() => {
    const interval = setInterval(Verifi, 5000); // Verificar cada 5 segundos
  
    return () => clearInterval(interval);
  }, [ExistLoget]); // Agrega ExistLoget al arreglo de dependencias

  const AddUser = (userData) => {
    setUsuarioLog(userData);
    localStorage.setItem("User_docente", JSON.stringify(userData));
  };

  const CerrarSesion = () => {
    setUsuarioLog(null);
    setExistLoget(false);
    localStorage.removeItem("User_docente");
    localStorage.removeItem("token_docent");
  };

  return (
    <AuthContext.Provider
      value={{ UsuarioLog, ExistLoget, AddUser, CerrarSesion }}
    >
      {children}
    </AuthContext.Provider>
  );
};