import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import { toast } from "react-toastify";

import axiosInstance from "../../../api/ConfigApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

function FormSig() {
  const { AddUser, ExistLoget } = useAuth();
  const navi = useNavigate();
const [CargaSubmit, setCargaSubmit] = useState(false);
  useEffect(() => {
    if (ExistLoget) {
      navi("/User");
    }
  }, [ExistLoget, navi]);

  return (
    <div className="">
      <Formik
        initialValues={{
          usuario: "",
          contraseña: "",
        }}
        onSubmit={async (values) => {
          try {
            setCargaSubmit(true)
            const respuesta = await axiosInstance.post("api/SignIn", values);
            if (respuesta.data.loged) {
              setTimeout(() => {
                localStorage.setItem("token_docent", respuesta.data.token);
                toast.success(`Usuario Iniciado ${respuesta.data.user.nombre}`);
                AddUser(respuesta.data.user);
                setCargaSubmit(false)
              }, 4000);
            } else {
              setTimeout(() => {
                toast.error("Ingrese de manera correcta sus datos");
               setCargaSubmit(false)
              }, 4000);
              
            }
          } catch (error) {
            setTimeout(() => {
              toast.error(
                "Error en el Servidor , comuniquese con el Administrador"
              );
              setCargaSubmit(false)
            }, 4000);
            
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
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
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ingrese su contraseña"
              onChange={handleChange}
              value={values.contraseña}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-5 py-2 mt-6 rounded-xl text-lg "
              disabled={CargaSubmit}
            >
              {CargaSubmit ? "Comprobando ...." : "Iniciar Seccion"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSig;
