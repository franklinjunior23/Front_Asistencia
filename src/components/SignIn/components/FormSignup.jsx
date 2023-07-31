import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import { toast } from "react-toastify";

import axiosInstance from "../../../api/ConfigApi";
import { useNavigate } from "react-router-dom";

function FormSig() {
  const [usuarioconectado, setusuarioconectado] = useState(false);
  const navi = useNavigate();
useEffect(() => {
  if(usuarioconectado){
    navi('Dashboard')
  }
 
}, [usuarioconectado,navi]);
  return (
    <div className="">
      <Formik
        initialValues={{
          usuario: "",
          contraseña: "",
        }}
        onSubmit={async (values) => {
          try {
            const respuesta = await axiosInstance.post("api/SignIn", values);
            if (respuesta.data.loged) {
              localStorage.setItem("token", respuesta.data.token);
              localStorage.setItem("User", JSON.stringify(respuesta.data.user) );

              toast.success(`Usuario Iniciado ${respuesta.data.user.nombre}`);
              setTimeout(() => {
                setusuarioconectado(true)
              }, 4000); 
            } else {
              toast.error("Ingrese de manera correcta sus datos");
            }
          } catch (error) {
            toast.error(
              "Error en el Servidor , comuniquese con el Administrador"
            );
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label className="block text-white text-lg my-2 tracking-wide	">
              Usuario
            </label>
            <input
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="usuario"
              placeholder="Ingrese su usuario"
              onChange={handleChange}
              value={values.usuario}
            />
            <label className="block text-white text-lg my-2 tracking-wide	">
              Contraseña
            </label>
            <input
              name="contraseña"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ingrese su contraseña"
              onChange={handleChange}
              value={values.contraseña}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-5 py-2 mt-6 rounded-xl text-lg "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Comprobando ...." : "Iniciar Seccion"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSig;
