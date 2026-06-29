import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  CalendarDays,
  Dumbbell,
  ArrowUpDown,
  CreditCard,
  Wrench,
  FileBarChart2,
  ClipboardList,
  Gift,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const menuSections = [
    {
      title: 'PRINCIPAL',
      items: [
        { name: 'Dashboard', to: '/', icon: LayoutDashboard }
      ]
    },
    {
      title: 'GESTIÓN',
      items: [
        { name: 'Usuarios', to: '/usuarios', icon: Users },
        { name: 'Socios', to: '/socios', icon: UserCheck },
        { name: 'Reservas', to: '/reservas', icon: CalendarDays },
        { name: 'Servicios', to: '/servicios', icon: Dumbbell },
        { name: 'Ingresos / Egresos', to: '/accesos', icon: ArrowUpDown }
      ]
    },
    {
      title: 'FINANZAS',
      items: [
        { name: 'Pagos', to: '/pagos', icon: CreditCard },
        { name: 'Mantenimiento', to: '/mantenimiento', icon: Wrench }
      ]
    },
    {
      title: 'ANÁLISIS',
      items: [
        { name: 'Reportes', to: '/reportes', icon: FileBarChart2 },
        { name: 'Encuestas', to: '/encuestas', icon: ClipboardList }
      ]
    },
    {
      title: 'SISTEMA',
      items: [
        { name: 'Empleados', to: '/empleados', icon: UserCheck },
        { name: 'Puntos / Promos', to: '/puntos', icon: Gift }
      ]
    }
  ];

  return (
    <aside className={cn("w-64 bg-brand-dark text-white flex flex-col h-screen overflow-y-auto border-r border-red-950/40 select-none", className)}>
      {/* Header Logo */}
      <div className="p-6 border-b border-red-950/30 flex items-center gap-3">
        <div className="bg-brand-yellow text-brand-dark font-black text-xl w-12 h-12 rounded-lg flex flex-col items-center justify-center shadow-md">
          <span className="leading-none text-white font-extrabold text-[15px]">SBE</span>
          <span className="text-[9px] font-bold text-yellow-100">UNSE</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm tracking-wide leading-tight">Bienestar</span>
          <span className="font-bold text-sm tracking-wide leading-tight">Estudiantil</span>
          <span className="text-[10px] text-red-300/70 font-semibold mt-0.5">UNSE · Admin</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-1.5">
            <h4 className="text-[10px] font-bold tracking-wider text-red-300/50 px-3 uppercase">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer",
                        isActive
                          ? "bg-brand-red text-white font-semibold shadow-inner"
                          : "text-red-100/70 hover:bg-brand-dark-hover hover:text-white"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <item.icon className={cn("h-4.5 w-4.5 transition-transform duration-150", isActive ? "scale-110 text-white" : "text-red-200/50")} />
                        <span>{item.name}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-red-950/30 bg-red-950/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark font-bold text-sm flex items-center justify-center border border-yellow-400/30 shadow-sm">
            MA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-red-50">M. Álvarez</span>
            <span className="text-[10px] text-red-300/60 font-medium">Administrador</span>
          </div>
        </div>
        <button 
          title="Cerrar sesión"
          className="text-red-300/40 hover:text-red-100 p-1.5 rounded-lg transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;
