import { BrowserRouter, Route, Routes } from "react-router-dom";

import User from "./Views/User/User";
import SignIn from "./components/Sign/SignIn";
import Dashboard from "./Views/Dashboard/Dashboard";
import Marcar from "./Views/InitialPage/Marcar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}>
            <Route index element={<SignIn />} />
          </Route>
          <Route path="/User" element={<Dashboard />}>
            <Route index element={<Marcar/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
