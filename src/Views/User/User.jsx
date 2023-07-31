import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function User() {
  return (
    <main className="bg-slate-950/80 w-screen h-screen grid place-content-center ">
    <Outlet />
    </main>
  );
}

export default User;
