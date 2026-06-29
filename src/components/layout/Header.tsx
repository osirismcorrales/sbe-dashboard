import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onNewSocioClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function Header({
  title,
  subtitle = "Polideportivo UNSE - Mayo 2026",
  onNewSocioClick,
  searchQuery,
  onSearchChange
}: HeaderProps) {
  const showActions = onSearchChange != null || onNewSocioClick != null;

  return (
    <header className="bg-white border-b border-gray-200 h-16 px-8 flex items-center justify-between shrink-0 select-none">
      {/* Title & Subtitle */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight m-0 p-0 leading-none">
          {title}
        </h1>
        <span className="text-xs text-gray-400 font-medium mt-1">
          {subtitle}
        </span>
      </div>

      {/* Actions — only shown on relevant pages */}
      {showActions && (
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          {onSearchChange != null && (
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar usuario..."
                value={searchQuery ?? ''}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-9 pl-9 pr-4 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 text-gray-700"
              />
            </div>
          )}

          {/* New Partner Button */}
          {onNewSocioClick && (
            <Button
              onClick={onNewSocioClick}
              variant="brand"
              size="sm"
              className="flex items-center gap-1.5 font-semibold text-xs rounded-lg shadow-sm hover:shadow-md transition-all h-9 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Nuevo socio
            </Button>
          )}
        </div>
      )}
    </header>
  );
}
export default Header;
