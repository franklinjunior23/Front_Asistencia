import { useEffect } from "react";
import Navbar from "../../components/Dashboard/components/Navbar";
import { useLogin } from "../../context/authContext";
import { Outlet, useNavigate } from "react-router-dom";


function Dashboard() {
  const { UsuarioLog } = useLogin();
  const navi = useNavigate();
  useEffect(() => {
    if (UsuarioLog.length === 0) {
      navi("/");
    }
  }, [UsuarioLog, navi]);
  return (
    <>
      <Navbar />
      <main className="bg-slate-950/80 w-full">
        <section className="max-w-[1250px] m-auto px-4 py-5">
        <Outlet />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
