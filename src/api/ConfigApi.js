import axios from "axios";

export const {VITE_API_DOMIN} = import.meta.env;

const axiosInstance = axios.create({
    baseURL: VITE_API_DOMIN,
  });
  
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Obtener el token almacenado en el localStorage
    if (token) {
      config.headers["Validation"] = token; // Agregar el token al encabezado de la solicitud
    }
    return config;
  });
  
  export default axiosInstance;
  