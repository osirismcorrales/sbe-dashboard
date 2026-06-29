import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from '../context/DataContext';
import AdminLayout from '../components/layout/AdminLayout';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import UsuariosPage from '../features/usuarios/pages/UsuariosPage';
import SociosPage from '../features/socios/pages/SociosPage';
import ReservasPage from '../features/reservas/pages/ReservasPage';
import ServiciosPage from '../features/servicios/pages/ServiciosPage';
import AccesosPage from '../features/accesos/pages/AccesosPage';
import FinanzasPage from '../features/finanzas/pages/FinanzasPage';
import EncuestasPage from '../features/encuestas/pages/EncuestasPage';
import EmpleadosPage from '../features/empleados/pages/EmpleadosPage';
import PuntosPage from '../features/puntos/pages/PuntosPage';

export function AppRoutes() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/socios" element={<SociosPage />} />
            <Route path="/reservas" element={<ReservasPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/accesos" element={<AccesosPage />} />
            <Route path="/pagos" element={<FinanzasPage initialTab="pagos" />} />
            <Route path="/mantenimiento" element={<FinanzasPage initialTab="mantenimiento" />} />
            <Route path="/reportes" element={<FinanzasPage initialTab="reportes" />} />
            <Route path="/encuestas" element={<EncuestasPage />} />
            <Route path="/empleados" element={<EmpleadosPage />} />
            <Route path="/puntos" element={<PuntosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
export default AppRoutes;
