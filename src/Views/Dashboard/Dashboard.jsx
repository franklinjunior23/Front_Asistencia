import Navbar from "../../components/Dashboard/components/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
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
