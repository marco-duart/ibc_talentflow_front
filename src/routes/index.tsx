import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/baseLayout";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { PrivateRoute } from "../components/auth/PrivateRoute";
import AboutUs from "../pages/about-us/about-us";
import { Support } from "styled-icons/boxicons-regular";

export default function Router() {
  const ADMIN_ONLY = ['ti', 'admin']
  const USERS_ONLY = ['ti', 'admin', 'user']
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<PasswordRecovery />} /> */}
        {/* <Route path="/admin" element={<PrivateRoute requiredRoles={ADMIN_ONLY} redirectTo="/"><BaseLayout /></PrivateRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<CNPJ />} />
          <Route path="/" element={<Kanban />} />
          <Route path="/" element={<Candidates />} />
          <Route path="/" element={<Exams />} />
          <Route path="/" element={<Configurações />} />
          <Route path="/" element={<Notificações />} />
          <Route path="/" element={<Skills-Knowledges-Profiles />} />
        </Route> */}
        <Route path="/user" element={<PrivateRoute requiredRoles={USERS_ONLY} redirectTo="/"><BaseLayout /></PrivateRoute>}>
          {/* <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<Vagas />} />
          <Route path="/" element={<Processos />} />
          <Route path="/" element={<Configurações />} />
          <Route path="/" element={<Notificações />} /> */}
          <Route path="/user/about-us" element={<PrivateRoute requiredRoles={USERS_ONLY} redirectTo="/"><AboutUs /></PrivateRoute>}/>
          <Route path="/user/support" element={<PrivateRoute requiredRoles={USERS_ONLY} redirectTo="/"><Support /></PrivateRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
